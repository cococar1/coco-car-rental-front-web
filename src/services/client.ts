import merge from "deepmerge";
import { useMemo } from "react";
import { IncomingMessage } from "http";
import { getCookie, removeCookie, setCookie } from "../helpers/cookie";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  RequestHandler,
  NormalizedCacheObject,
  Observable,
  FetchResult,
  GraphQLRequest,
} from "@apollo/client";
import { GraphQLError } from "graphql";
import { REFRESH_TOKEN } from "@/gql/auth/auth.query";

let apolloClient: any;

const URL_API = `${
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL
}/graphql`;

function isRefreshRequest(operation: GraphQLRequest) {
  return operation.operationName === "refresh_token";
}

// Returns accesstoken if opoeration is not a refresh token request
function returnTokenDependingOnOperation(
  operation: GraphQLRequest,
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
) {
  if (isRefreshRequest(operation)) return getCookie("refresh_token", req) || "";
  else return getCookie("access_token", req) || "";
}

const createApolloClient = (
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
): ApolloClient<NormalizedCacheObject> => {
  const uploadLink: unknown = createUploadLink({ uri: URL_API });

  const authLink: ApolloLink = setContext((operation, { headers }) => {
    let extraHeader = {};

    if (typeof window !== "undefined") {
      const token = returnTokenDependingOnOperation(operation);

      if (token) {
        extraHeader = {
          Authorization: `Bearer ${token}`,
        };
      }

      return {
        headers: { ...headers, ...extraHeader },
      };
    } else {
      const token = returnTokenDependingOnOperation(operation, req);

      if (token) {
        extraHeader = {
          Authorization: `Bearer ${token}`,
        };
      }
      return {
        headers: { ...headers, ...extraHeader },
      };
    }
  });

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          switch (err.extensions.code) {
            case "UNAUTHENTICATED":
              // ignore 401 error for a refresh request
              if (operation.operationName === "refresh_token") return;

              const observable = new Observable<
                FetchResult<Record<string, any>>
              >((observer) => {
                // used an annonymous function for using an async function
                (async () => {
                  try {
                    const accessToken = await refreshToken();
                    if (!accessToken) {
                      throw new GraphQLError("Empty AccessToken");
                    }
                    // Retry the failed request
                    const subscriber = {
                      next: observer.next.bind(observer),
                      error: observer.error.bind(observer),
                      complete: observer.complete.bind(observer),
                    };

                    forward(operation).subscribe(subscriber);
                  } catch (err) {
                    observer?.error(err);
                  }
                })();
              });

              return observable;
          }
        }
      }

      if (networkError) console.error(`[Network error]: ${networkError}`);
    }
  );

  const headers = {
    Authorization: `Bearer ${
      req ? getCookie("access_token", req) : getCookie("access_token")
    }`,
  };

  const client = new ApolloClient({
    uri: URL_API,
    ssrMode: typeof window === "undefined",
    link: ApolloLink.from([
      errorLink,
      authLink,
      uploadLink as ApolloLink | RequestHandler,
    ]),
    headers,
    cache: new InMemoryCache(),
  });

  // Request a refresh token to then stores and returns the accessToken.
  const refreshToken = async () => {
    const refreshToken = getCookie("refresh_token");

    if (!refreshToken) {
      throw new GraphQLError("No refresh token");
    }

    try {
      const refreshResolverResponse = await client.query({
        query: REFRESH_TOKEN,
        fetchPolicy: "no-cache",
        variables: {
          refresh: refreshToken,
        },
      });

      const accessToken =
        refreshResolverResponse.data?.refreshToken.accessToken;

      setCookie("access_token", accessToken || "");
      return accessToken;
    } catch (err) {
      removeCookie("access_token");
      removeCookie("refresh_token");
      throw err;
    }
  };

  return client;
};

export function initializeApollo(
  initialState = null,
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
) {
  const _apolloClient: ApolloClient<NormalizedCacheObject> | any =
    apolloClient ?? createApolloClient(req);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => d !== s)),
      ],
    });

    _apolloClient.cache.restore(data);
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: null | undefined) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

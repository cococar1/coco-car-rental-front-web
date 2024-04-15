import { getSession } from "next-auth/react";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

import { initializeApollo } from "./services/client";
import { LOGGED_USER } from "./gql/auth/auth.query";

export async function middleware(req: NextRequest) {
  const requestForNextAuth = {
    headers: {
      cookie: req.headers.get("cookie") ?? undefined,
    },
  };
  const session = (await getSession({ req: requestForNextAuth })) as any;
  const token = await req.cookies.get("access_token")?.value;
  console.log("jamz ", token);
  const apolloClient = initializeApollo();
  const url = req.nextUrl.clone();
  const redirectedParam = req.url.includes("?redirected=true");
  console.log("middleware", redirectedParam);
  if (req.nextUrl.pathname.startsWith("/app")) {
    if (!session || !token) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
  console.log("middleware 26");
  console.log(req.nextUrl);
  console.log(redirectedParam);
  //TODO: resolver redireccionamiento
  // TODO: Corregir estaba con estar/ pero algo no me cuadr
  if (req.nextUrl.pathname == "/" && !redirectedParam) {
    const accessToken = session?.user?.accessToken;
    console.log("middleware 31", accessToken);

    if (accessToken) {
      console.log("middleware 34");
      try {
        console.log("session 32", session);
        const {
          data: { dataWithToken },
        } = await apolloClient.query({
          query: LOGGED_USER,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        });
        console.log("datax", dataWithToken);
        if (dataWithToken) {
          const url = req.nextUrl.clone();
          console.log("middleware 49");
          url.pathname = "/";
          url.searchParams.set("redirected", "true");
          const response = NextResponse.redirect(url);
          response.cookies.set("access_token", accessToken);
          return response;
        } else {
          const url = req.nextUrl.clone();
          url.pathname = "/";

          return NextResponse.redirect(url);
        }
      } catch (error) {
        console.log(error, "error with get user");
      }
    } else {
      console.log("middleware 65");

      const url = req.nextUrl.clone();
      url.pathname = "/";
      // return NextResponse.redirect(url);
    }
  }
  console.log("middleware 68");

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
  runtime: "nodejs", // rather than "edge"
  unstable_allowDynamic: [
    "/node_modules/@babel/runtime/regenerator/index.js", // file causing the build error
  ],
};

export default withAuth({});

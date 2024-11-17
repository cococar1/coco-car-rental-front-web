import { ApolloClient } from "@apollo/client";
import { JWT } from "next-auth/jwt";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import { AUTH_LOGIN } from "@/gql/auth/auth.query";
// import { setCookie } from "@/helpers/cookie";
import { fetchFacebookData, fetchGoogleData } from "@/services/auth";
import { initializeApollo } from "@/services/client";
import { setCookie } from "@/helpers/cookie";

// import { redirect } from "next/dist/server/api-utils";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials: Record<string, string> | undefined) {
        const { email, password } = credentials ?? {};
        const apolloClient: ApolloClient<any> = initializeApollo();

        console.log("credentials");
        try {
          const { data } = await apolloClient.query({
            query: AUTH_LOGIN,
            variables: {
              email,
              password,
            },
          });

          console.log("data", data);

          const { authLogin } = data || {};
          const { user } = authLogin || {};

          if (user) {
            await setCookie("access_token", authLogin.accessToken);
            await setCookie("refresh_token", authLogin.refreshToken);
            return {
              _id: user._id,
              fullName: user.fullName,
              username: user.username,
              email: user.email,
              photo: user.photo,
              accessToken: authLogin.accessToken,
              refreshToken: authLogin.refreshToken,
            };
          }
        } catch (err) {
          return null;
        }
      },
    } as any),

    // ...add more providers here
  ],

  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("next auth api 50", token);
      if (account) {
        token.id_token = account.id_token;
      }
      if (user) {
        if (account) {
          console.log(token);
          if (account.provider === "google") {
            console.log("validate googleeeeeee", account.access_token);
            token.graphqlData = await fetchGoogleData(
              account.access_token!,
              user.name,
              account.provider
            );
          } else if (account.provider == "facebook") {
            console.log("validate facebook", account);

            token.graphqlData = await fetchFacebookData(
              account.access_token!,
              user,
              account.provider
            );
            // console.log("")
          } else if (account.provider === "credentials") {
            token.graphqlData = user;
          }
        }
      }
      return token;
    },

    async redirect({ url, baseUrl }) {
      console.log("api 68", url, baseUrl);
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      console.log("next auth 62 api", session);
      session.token = token.id_token as string;
      session.user = token.graphqlData;
      return session;
    },
  },
};

export default NextAuth(authOptions);
export { authOptions as GET, authOptions as POST };

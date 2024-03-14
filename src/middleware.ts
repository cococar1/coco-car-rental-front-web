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
  console.log("session",session)
  const token = await req.cookies.get("access_token")?.value;
  const apolloClient = initializeApollo();
  const url = req.nextUrl.clone();
  const redirectedParam = req.url.includes("?redirected=true");
  const protectedRoutes = ["/config", "/favorite-cars", "/my-booking"];

  console.log("middleware 22 ",token)
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!session || !token) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }}
export const config = {
  matcher: ["/"],
};

export default withAuth({});

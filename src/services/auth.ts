import { GOOGLE_AUTH } from "@/gql/auth/auth.query";
import { initializeApollo } from "./client";
import { setCookie } from "@/helpers/cookie";

export async function fetchGoogleData(
  accessToken: string,
  user: any,
  provider: string
) {
  const apolloClient = initializeApollo();
  try {
    // console.log("fetch google", accessToken,user,provider)
    const data = await apolloClient.query({
      query: GOOGLE_AUTH,
      variables: {
        id_token: accessToken,
        firstName: user?.split(" ")[0],
        lastName: user?.split(" ")[1],
      },
      
    },);

    // console.log("response fetch google", data)
    const userProfile = {
      ...data.data.googleAuth.user,
      accessToken: data.data.googleAuth.accessToken,
      refreshToken: data.data.googleAuth.refreshToken,
      provider,
    };
    setCookie("access_token", userProfile.accessToken);
    setCookie("refresh_token", userProfile.refreshToken);
    return userProfile;
  } catch (error) {
    return null;
  }
}

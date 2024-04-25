import { FACEBOOK_AUTH, GOOGLE_AUTH } from "@/gql/auth/auth.query";
import { initializeApollo } from "./client";
import { setCookie } from "@/helpers/cookie";

export async function   fetchGoogleData(
  accessToken: string,
  user: any,
  provider: string
) {
  const apolloClient = initializeApollo();
  try {
    console.log("fetch google", accessToken);
    console.log("user", user);
    console.log("provider", provider);
    const data = await apolloClient.query({
      query: GOOGLE_AUTH,
      variables: {
        id_token: accessToken,
        firstName: user,
        // lastName: user?.split(" ")[1],
      },
    });

    console.log("response fetch google", data);
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

export async function fetchFacebookData(
  accessToken: string,
  user: any,
  provider: string
) {
  const apolloClient = initializeApollo();
  try {
    console.log("fetch facebook", accessToken);
    console.log("user", user);
    console.log("provider", provider);
    const data = await apolloClient.query({
      query: FACEBOOK_AUTH,
      variables: {
        id_token: accessToken,
      },
    });

    console.log("response fetch facebook", data);
    const userProfile = {
      ...data.data.facebookAuth.user,
      accessToken: data.data.facebookAuth.accessToken,
      refreshToken: data.data.facebookAuth.refreshToken,
      provider,
    };
    setCookie("access_token", userProfile.accessToken);
    setCookie("refresh_token", userProfile.refreshToken);
    return userProfile;
  } catch (error) {
    console.log(error)
    return null;
  }
}

/*
{
  name: 'José Montenegro Zelada',
  email: 'jamz201616@gmail.com',
  picture: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1153778585464232&height=50&width=50&ext=1716395930&hash=AbbRiMgBgKxvwZH8ADDQP6gB',
  sub: '1153778585464232',
  id_token: undefined
}


*/

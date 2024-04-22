import { gql } from "@apollo/client";
export const AUTH_LOGIN = gql`
  query AUTH_LOGIN($email: String!, $password: String!) {
    authLogin(email: $email, password: $password) {
      user {
        _id
        fullName
        username
        email
        role
        photo
        gender
        phoneNumber
        address
      }
      accessToken
      refreshToken
    }
  }
`;

export const LOGGED_USER = gql`
  query LOGGED_USER {
    dataWithToken {
      _id
      fullName
      username
      email
      role
      photo
      gender
      phoneNumber
      address
    }
  }
`;

export const REFRESH_TOKEN = gql`
  query REFRESH_TOKEN($refresh: String!) {
    refreshToken(refresh: $refresh) {
      accessToken
      refreshToken
    }
  }
`;

export const GOOGLE_AUTH = gql`
  query GOOGLE_AUTH($id_token: String, $firstName: String) {
    googleAuth(id_token: $id_token, firstName: $firstName) {
      user {
        _id
        fullName
        username
        email
        role
        photo
        gender
        phoneNumber
        address
      }
      accessToken
      refreshToken
    }
  }
`;

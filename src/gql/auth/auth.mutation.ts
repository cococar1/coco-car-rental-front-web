import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CREATE_USER($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      accessToken
      refreshToken
      user {
        _id
        fullName
        username
        email
        photo
        gender
        phoneNumber
        address
      }
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation CHANGE_PASSWORD(
    $oldPassword: String!
    $newPassword: String!
    $repeatPassword: String!
  ) {
    changePassword(
      oldPassword: $oldPassword
      newPassword: $newPassword
      repeatPassword: $repeatPassword
    )
  }
`;

export const UPDATE_USER = gql`
  mutation UPDATE_USER($data: UpdateUserInput!, $file: Upload) {
    updateUser(updateUserInput: $data, file: $file) {
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

export const RECOVER_PASSWORD = gql`
  mutation RECOVERY_PASSWORD($email: String!) {
    requestRecoverPassword(email: $email) {
      address
      _id
      email
      fullName
    }
  }
`;

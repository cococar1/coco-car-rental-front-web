import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation CREATE_CONTACT($data: CreateContactInput!) {
    createContact(createContactInput: $data) {
      content
      email
      subject
      createdAt
    }
  }
`;

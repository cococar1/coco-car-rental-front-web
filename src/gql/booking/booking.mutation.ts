import { gql } from "@apollo/client";

export const CREATE_BOOKING = gql`
  mutation CREATE_BOOKING($data: CreateBookingInput!) {
    createBooking(createBookingInput: $data)
  }
`;

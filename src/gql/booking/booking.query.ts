import { gql } from "@apollo/client";

export const MY_BOOKING = gql`
  query MY_BOOKINGS {
    myBookings {
      _id
      pickupDate
      client {
        address
        fullName
        gender
        phoneNumber
        email
      }
      car {
        brand
        image
        licensePlate
        model
        car {
          maxTankQuantity
          countPerson
          fullType
          typeChange
        }
      }
      paymentId
      paymentMethod
      pickupDate
      returnDate
      status
      price
    }
  }
`;

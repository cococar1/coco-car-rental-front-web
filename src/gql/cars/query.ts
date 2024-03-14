import { gql } from "@apollo/client";

export const ALL_CAR = gql`
  query ALL_CAR($filter:FilterCarInput) {
    cars(filter:$filter) {
      _id
      name
      image
      countPerson
      typeChange
      minTankQuantity
      maxTankQuantity
      fullType
      subTitle
      description
      price
      createdAt
      updatedAt
      availability
      published
      brand
      model
      pickupTime
    }
  }
`;

export const ONE_CAR = gql`
  query ONE_CAR($id: ID!) {
    car(id: $id) {
      _id
      name
      image
      countPerson
      typeChange
      minTankQuantity
      maxTankQuantity
      fullType
      subTitle
      description
      price
      createdAt
      updatedAt
      availability
      published
      brand
      model
      pickupTime
      features
      licensePlate
    }
  }
`;

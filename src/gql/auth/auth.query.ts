import { gql } from '@apollo/client'

export const AUTH_LOGIN = gql`
  query AUTH_LOGIN($email: String!, $password: String!) {
    authLogin(email: $email, password: $password) {
      accessToken
      refreshToken
      user {
        _id
        firstName
        lastName
        username
        email
        dateBirth
        genre
        role
        photo
        school {
          _id
          name
        }
        phoneNumber
        university {
          _id
          name
        }
        area {
          _id
          name
        }
        career {
          _id
          name
        }
        school {
          _id
          name
        }
        address {
          street
          city
          province
          postalCode
        }
        career {
          _id
          name
        }

        dni
        favoriteCourses {
          _id
          name
          description
          image
        }
        coursesPurchased {
          _id
          name
          description
          image
        }
        allCourses {
          university
          area
        }
        allSimulations {
          university
          area
        }
      }
    }
  }
`

export const LOGGED_USER = gql`
  query LOGGED_USER {
    loggedUser {
      _id
      firstName
      lastName
      username
      profession
      email
      role
      photo
      dateBirth
      genre
      school {
        _id
        name
      }
      university {
        _id
        name
      }
      area {
        _id
        name
      }
      career {
        _id
        name
      }
      phoneNumber
      dni
      favoriteCourses {
        _id
        name
        description
        image
      }
      coursesPurchased {
        _id
        name
        description
        image
      }
      allCourses {
        university
        area
      }
      allSimulations {
        university
        area
      }
    }
  }
`

export const REFRESH_TOKEN = gql`
  query REFRESH_TOKEN($refresh: String!) {
    refreshToken(refresh: $refresh) {
      accessToken
      refreshToken
    }
  }
`

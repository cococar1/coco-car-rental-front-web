export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export interface User {
  _id?: string;
  fullName?: string;
  username?: string;
  email?: string;
  photo?: null;
  role?: "ADMIN" | "USER";
  accessToken?: string;
  refreshToken?: string;
  address?: any;

  gender?: string | Gender;
  phoneNumber?: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  user: Omit<User, "password">;
  accessToken: string;
  refreshToken: string;
}

export interface UserRegistrationData {
  fullName?: string;
  password?: string;
  repeatPassword?: string;
  email?: string;
}

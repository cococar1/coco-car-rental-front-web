import { Car } from "./Car.type";

export interface BookingHookType {
  newBooking: CreateBooking;
  setNewBooking: any;
  createBooking: (data: any, onSuccess: (val: any) => void) => void;
  //   deleteBooking: (id: any, onSuccess: (val: any) => void) => void;
  //   getBookings: (options: any) => void;
  //   bookingsOptions: {
  //     data: Booking[] | any;
  //     loading: boolean;
  //     error: any;
  //   };
  createOptions: {
    data: Booking[] | any;
    loading: boolean;
    error: any;
  };
  bookingsOptions: {
    data: Booking[] | any;
    loading: boolean;
    error: any;
  };

  //   deleteOptions: {
  //     data: boolean | any;
  //     loading: boolean;
  //     error: any;
  //   };
}

export interface Booking {
  pickupDate: string;
  returnDate: string;
  price: number;
  client: Client;
  car: CarDetail;
  status: "pending" | "confirmed" | "cancelled";
  paymentMethod: string;
  image: null;
  paymentId: null | string;
}

export interface CarDetail {
  licensePlate: string;
  model: string;
  brand: string;
  image: string;
  car?: Car;
}

export interface Client {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender: string;
  userId?: string;
}

export interface CreateBooking {
  car: string;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  client: Client;
}

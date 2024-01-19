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
  car: Car;
  status: "pending" | "confirmed" | "cancelled";
  paymentMethod: string;
  image: null;
  paymentId: null | string;
}

export interface Car {
  licensePlate: string;
  model: string;
  brand: string;
}

export interface Client {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  gender: string;
}

export interface CreateBooking {
  car: string;
  pickupDate: string;
  returnDate: string;
  client: Client;
}

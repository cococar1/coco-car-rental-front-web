import { useEffect, useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_BOOKING } from "@/gql/booking/booking.mutation";
import { CreateBooking } from "@/types/Booking";
import { MY_BOOKING } from "@/gql/booking/booking.query";

export const useBooking = () => {
  const [newBooking, setNewBooking] = useState<CreateBooking>(
    {} as CreateBooking
  );

  const [createBookingFn, createBookingRes] = useMutation(CREATE_BOOKING);

  const [getAllBookingFn, getAllBookingRes] = useLazyQuery(MY_BOOKING);

  const createBooking = (
    data: CreateBooking,
    onSuccess: (val: any) => void
  ) => {
    createBookingFn({
      variables: {
        data,
      },
      onCompleted(data) {
        if (data) {
          //   toast.success("Extra creado correctamente", {
          //     position: "bottom-right",
          //   });
          onSuccess && onSuccess(data.createExtra);
        }
      },
      onError(error) {
        console.error(error);
        toast.error(error.message || "Error al crear Orden");
      },
    });
  };
  useEffect(() => {
    if (!getAllBookingRes.data) {
      getAllBookingFn();
    }
  }, []);

  return {
    newBooking,
    setNewBooking,
    createBooking,
    bookingsOptions: {
      data: getAllBookingRes.data?.myBookings,
      loading: getAllBookingRes.loading,
      error: getAllBookingRes.error,
    },
    createOptions: {
      data: createBookingRes.data?.createBooking,
      loading: createBookingRes.loading,
      error: createBookingRes.error,
    },
  };
};

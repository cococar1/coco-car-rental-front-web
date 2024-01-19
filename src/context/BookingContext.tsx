import { createContext, useContext } from "react";
import { BookingHookType } from "@/types/Booking";
import { useBooking } from "@/hooks/useBooking";

export const BookingContext = createContext({} as BookingHookType);
interface Props {
  children: React.ReactNode;
}

export const BookingProvider: React.FC<Props> = ({ children }) => {
  const booking = useBooking();

  return (
    <BookingContext.Provider value={booking}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);

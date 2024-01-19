import { BookingProvider } from "@/context/BookingContext";
import { CarProvider } from "@/context/CarContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <BookingProvider>
      <CarProvider>{children}</CarProvider>
    </BookingProvider>
  );
};

export default Providers;

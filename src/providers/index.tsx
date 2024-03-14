import {  AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import { CarProvider } from "@/context/CarContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <BookingProvider>
        <CarProvider>{children}</CarProvider>
      </BookingProvider>
    </AuthProvider>
  );
};

export default Providers;

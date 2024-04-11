import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import { CarProvider } from "@/context/CarContext";
import { ContactProvider } from "@/context/ContactContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <BookingProvider>
        <CarProvider>
          <ContactProvider>{children}</ContactProvider>
        </CarProvider>
      </BookingProvider>
    </AuthProvider>
  );
};

export default Providers;

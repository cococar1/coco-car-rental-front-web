import { AuthProvider } from "@/context/AuthContext";
import { BookingProvider } from "@/context/BookingContext";
import { CarProvider } from "@/context/CarContext";
import { ContactProvider } from "@/context/ContactContext";
import { FaqProvider } from "@/context/FaqContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <BookingProvider>
        <CarProvider>
          <FaqProvider>
            <ContactProvider>{children}</ContactProvider>
          </FaqProvider>
        </CarProvider>
      </BookingProvider>
    </AuthProvider>
  );
};

export default Providers;

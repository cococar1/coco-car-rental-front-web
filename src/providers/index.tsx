import { BookingProvider } from "@/context/BookingContext";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <BookingProvider>{children}</BookingProvider>;
};

export default Providers;

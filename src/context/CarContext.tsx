import { createContext, useContext } from "react";
import { CarHookType } from "@/types/Car.type";
import { useCar } from "@/hooks/useCar";

export const CarContext = createContext({} as CarHookType);
interface Props {
  children: React.ReactNode;
}

export const CarProvider: React.FC<Props> = ({ children }) => {
  const booking = useCar();

  return <CarContext.Provider value={booking}>{children}</CarContext.Provider>;
};

export const useCarContext = () => useContext(CarContext);

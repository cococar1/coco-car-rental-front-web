import { MainLayout } from "@/layouts/Main.layout";
import MainForm from "@/containers/home/MainForm";
import {
  ContainerContentHome,
  ContainerContentServiceHome,
} from "@/containers/home/mainfrom.styles";
import HomeServices from "@/containers/home/services";
import ContainerNewAutosHome from "@/containers/home/NewAuto";
import { SecctionNewAutos } from "@/containers/home/global.style";
import SectionDetails from "@/containers/home/details";
import SectionContact from "@/containers/home/contact";
import { useBooking } from "@/hooks/useBooking";
import { useEffect } from "react";
import { CreateBooking } from "@/types/Booking";

export default function Home() {
  const { newBooking, setNewBooking } = useBooking();
  useEffect(() => {
    //TODO: REvisar esto no se reinicia las propiedades de filtro , booking
    setNewBooking({} as CreateBooking);
  }, []);
  return (
    <MainLayout>
      <MainForm />
      <ContainerContentHome>
        <ContainerContentServiceHome>
          <div>
            <h2>La mejor manera de encontrar el vehículo perfecto</h2>
            <p>Las mejores opciones para que reserves y aproveches</p>
          </div>
          <HomeServices />
        </ContainerContentServiceHome>
      </ContainerContentHome>
      <SecctionNewAutos>
        <h2>Conoce nuestra flota</h2>
        <p>Las mejores opciones para que reserves y aproveches</p>
        <ContainerNewAutosHome />
      </SecctionNewAutos>
      <SectionDetails></SectionDetails>
      <SectionContact></SectionContact>
    </MainLayout>
  );
}

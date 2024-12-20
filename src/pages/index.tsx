import { MainLayout } from "@/layouts/Main.layout";
import MainForm from "@/containers/home/MainForm";
import {
  ContainerContentHome,
  ContainerContentServiceHome,
} from "@/containers/home/mainfrom.styles";
import HomeServices from "@/containers/home/services";
import ContainerNewAutosHome from "@/containers/home/NewAuto";
import { SectionNewAutos } from "@/containers/home/global.style";
import SectionDetails from "@/containers/home/details";
import SectionContact from "@/containers/home/contact";
import { useBooking } from "@/hooks/useBooking";
import { useEffect } from "react";
import { CreateBooking } from "@/types/Booking";
import { useAuthContext } from "@/context/AuthContext";
import { signOut, useSession } from "next-auth/react";
import { LoaderUI } from "@/ui/LoaderUI";

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>
              Encuentra la confianza que necesitas al elegirnos <br></br> para tu próximo
              alquiler de auto
            </h2>
            <p>Las mejores opciones para que reserves y aproveches</p>
          </div>
          <HomeServices />
        </ContainerContentServiceHome>
      </ContainerContentHome>
      <SectionNewAutos>
        <h2>Conoce nuestra flota</h2>
        <p>Las mejores opciones para tu comodidad</p>
        <ContainerNewAutosHome />
      </SectionNewAutos>
      <SectionDetails></SectionDetails>
      <SectionContact></SectionContact>
    </MainLayout>
  );
}

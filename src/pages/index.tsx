import Image from "next/image";

import styles from "@/styles/Home.module.css";
import { MainLayout } from "@/layouts/MainLayout";
import MainForm from "@/containers/home/MainForm";
import { ContainerContentHome, ContainerContentServiceHome } from "@/containers/home/mainfrom.styles";
import HomeServices from "@/containers/home/services";

export default function Home() {
  return (
    <MainLayout>
      <MainForm />
      <ContainerContentHome>
        <ContainerContentServiceHome>
          <div>
            <h2>La mejor manera de encontrar el vehículo perfecto</h2>
            <p>Las mejores opciones para que reserves y aproveches</p>
          </div>
        <HomeServices></HomeServices>
        </ContainerContentServiceHome>
        
      </ContainerContentHome>

    </MainLayout>
  );
}

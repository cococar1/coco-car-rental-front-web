import { MainLayout } from '@/layouts/MainLayout'
import MainForm from '@/containers/home/MainForm'
import {
  ContainerContentHome,
  ContainerContentServiceHome
} from '@/containers/home/mainfrom.styles'
import HomeServices from '@/containers/home/services'
import ContainerNewAutosHome from '@/containers/home/NewAuto'
import { SecctionNewAutos } from '@/containers/home/global.style'
import SectionDetails from '@/containers/home/details'
import SectionContact from '@/containers/home/contact'

export default function Home () {
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
      <SecctionNewAutos>
        <h2>Conoce nuestra flota</h2>
        <p>Las mejores opciones para que reserves y aproveches</p>
        <ContainerNewAutosHome></ContainerNewAutosHome>
      </SecctionNewAutos>
      <SectionDetails></SectionDetails>
      <SectionContact></SectionContact>
    </MainLayout>
  )
}

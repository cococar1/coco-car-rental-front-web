import CardAuto from "@/components/cardAuto";
import { ContainerNewAutos } from "@/containers/home/newAuto.styles";
interface ContainerNewAutosProps {}

const ContainerNewAutosHome: React.FC<ContainerNewAutosProps> = () => {
  return (
    <ContainerNewAutos>
      <CardAuto></CardAuto>
      <CardAuto></CardAuto>
      <CardAuto></CardAuto>
    </ContainerNewAutos>
  );
};

export default ContainerNewAutosHome;



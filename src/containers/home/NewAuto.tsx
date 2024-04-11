import CardAuto from "@/components/cardAuto";
import { ContainerNewAutos } from "@/containers/home/newAuto.styles";
import { useCarContext } from "@/context/CarContext";
import { Car } from "@/types/Car.type";
interface ContainerNewAutosProps {}

const ContainerNewAutosHome: React.FC<ContainerNewAutosProps> = () => {
  const {
    carsOptions: { data },
  } = useCarContext();
  return (
    <ContainerNewAutos>
      {data &&
        data.length > 0 &&
        data
          .slice(-3)
          .map((car: Car, key: any) => (
            <CardAuto key={key} car={car}></CardAuto>
          ))}
    </ContainerNewAutos>
  );
};

export default ContainerNewAutosHome;

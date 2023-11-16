import { ContainerOptions, Item } from "./options.style";
import { useState } from "react";

interface SectionOptionsProps {}

const SectionOptions: React.FC<SectionOptionsProps> = () => {
  const [option, setOption] = useState("todo");
  const changeOption = (e: any) => {
    setOption((e.target.innerText as string).toLocaleLowerCase());
  };
  return (
    <ContainerOptions>
      <Item onClick={changeOption} isActive={option == "todo"}>
        Todo
      </Item>
      <Item isActive={option == "adicionales"} onClick={changeOption}>
        Adicionales
      </Item>
      <Item isActive={option == "promociones"} onClick={changeOption}>
        Promociones
      </Item>
    </ContainerOptions>
  );
};

export default SectionOptions;

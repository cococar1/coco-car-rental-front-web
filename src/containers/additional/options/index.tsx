import { ContainerOptions, Item } from "./options.style";
import { useEffect, useState } from "react";

interface SectionOptionsProps {
  setOption: Function;
  option: string;
}

const SectionOptions: React.FC<SectionOptionsProps> = ({
  setOption,
  option,
}) => {
  useEffect(() => {
    console.log(option);
  }, [option]);
  console.log(option);
  const changeOption = (e: any) => {
    if ((e.target.innerText as string).toLocaleLowerCase() == "adicionales") {
      setOption("ADDITIONAL");
      return;
    }
    if ((e.target.innerText as string).toLocaleLowerCase() == "promociones") {
      setOption("PROMOTION");
      return;
    }
    setOption("todo");
  };
  return (
    <ContainerOptions>
      <Item onClick={changeOption} isActive={option == "todo"}>
        Todo
      </Item>
      <Item isActive={option == "ADDITIONAL"} onClick={changeOption}>
        Adicionales
      </Item>
      <Item isActive={option == "PROMOTION"} onClick={changeOption}>
        Promociones
      </Item>
    </ContainerOptions>
  );
};

export default SectionOptions;

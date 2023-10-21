import { ContainerSelectInput } from "./SelectInput.style";

interface SelectInputUiProps {
  backgroundColor: string;
  width: string;
  arrayOptions: Array<any>;
}

const SelectInputUI: React.FC<SelectInputUiProps> = ({
  backgroundColor,
  width,
  arrayOptions,
}) => {
  return (
    <ContainerSelectInput backgroundColor={backgroundColor} width={width}>
      <select placeholder="Categoria del auto" aria-label="Categoria del auto">
        <option value="" disabled selected>
          Categoria del auto
        </option>
        {arrayOptions.map((e, index) => {
          console.log(e);
          return (
            <option key={index} value={e.id}>
              {e.value}
            </option>
          );
        })}
        {/* <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option> */}
      </select>
    </ContainerSelectInput>
  );
};

export default SelectInputUI;

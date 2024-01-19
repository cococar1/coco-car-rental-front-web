import { ContainerSelectInput } from "./SelectInput.style";

interface SelectInputUiProps {
  backgroundColor: string;
  width: string;
  arrayOptions: Array<any>;
  placeholder: string;
  onChange?: Function;
  value: any;
  stylesContainer?: React.CSSProperties;
}

const SelectInputUI: React.FC<SelectInputUiProps> = ({
  backgroundColor,
  width,
  arrayOptions,
  placeholder,
  stylesContainer,
  onChange,
  value
}) => {
  return (
    <ContainerSelectInput
      backgroundColor={backgroundColor}
      width={width}
      style={stylesContainer ? stylesContainer : {}}
    >
      <select
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange as any}
      >
        <option value="" disabled selected>
          {placeholder}
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

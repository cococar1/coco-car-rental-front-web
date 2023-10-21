import { useRef, useState } from "react";
import { InputContainer } from "./InputUI.style";

interface InpuntUIProps {
  type: string;
  backgroundColor: string;
  SvgIcon: any;
  placeholder: string;
  stylesInput?: React.CSSProperties;
  stylesContainer?: React.CSSProperties;
}

const InpuntUI: React.FC<InpuntUIProps> = ({
  type,
  SvgIcon,
  placeholder,
  stylesInput,
  stylesContainer,
}: InpuntUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null); // Especifica el tipo HTMLInputElement
  const [value, setValue] = useState("");
  return (
    <InputContainer
      backgroundColor="#ffffff"
      width={"200px"}
      style={stylesContainer ? stylesContainer : {}}
    >
      <input
        type="text"
        ref={ref}
        onFocus={() => {
          if (ref.current) {
            ref.current.type = type;
          }
        }}
        style={stylesInput ? stylesInput : {}}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target?.value)}
        onBlur={() => {
          if (ref.current) {
            ref.current.type = value ? type : "text";
          }
        }}
        value={value}
      ></input>

      <span>{SvgIcon}</span>
    </InputContainer>
  );
};

export default InpuntUI;

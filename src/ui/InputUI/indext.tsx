import { useRef, useState } from "react";
import { InputContainer } from "./InputUI.style";

interface InpuntUIProps {
  type: string;
  backgroundColor: string;
  SvgIcon: any;
  placeholder: string;
}

const InpuntUI: React.FC<InpuntUIProps> = ({
  type,
  SvgIcon,
  placeholder,
}: InpuntUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null); // Especifica el tipo HTMLInputElement
  const [value, setValue] = useState("");
  return (
    <InputContainer backgroundColor="#ffffff" width={"200px"}>
      <input
        type="text"
        ref={ref}
        onFocus={() => {
          if (ref.current) {
            ref.current.type = type;
          }
        }}
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

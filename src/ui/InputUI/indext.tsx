import { useRef, useState } from "react";
import { InputContainer } from "./InputUI.style";

enum PositionIcon {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface InpuntUIProps {
  type: string;
  backgroundColor: string;
  SvgIcon: any;
  placeholder: string;
  stylesInput?: React.CSSProperties;
  stylesContainer?: React.CSSProperties;
  positionIcon?: PositionIcon | null | string;
  placeholderColor?: string;
}

const InpuntUI: React.FC<InpuntUIProps> = ({
  type,
  SvgIcon,
  placeholder,
  stylesInput,
  stylesContainer,
  positionIcon,
  placeholderColor,
}: InpuntUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null); // Especifica el tipo HTMLInputElement
  const [value, setValue] = useState("");
  console.log(PositionIcon.LEFT.toString());
  return (
    <InputContainer
      backgroundColor="#ffffff"
      width={"200px"}
      style={stylesContainer ? stylesContainer : {}}
      placeholderColor={placeholderColor}
    >
      {positionIcon === PositionIcon.LEFT && <span>{SvgIcon}</span>}
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
      {positionIcon == PositionIcon.RIGHT ||
        (positionIcon == null && <span>{SvgIcon}</span>)}
    </InputContainer>
  );
};

export default InpuntUI;

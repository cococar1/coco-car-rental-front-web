import { useEffect, useRef, useState } from "react";
import { InputContainer } from "./InputUI.style";

enum PositionIcon {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface InpuntUIProps {
  type: string;
  backgroundcolor: string;
  SvgIcon: any;
  placeholder: string;
  stylesInput?: any;
  stylesContainer?: React.CSSProperties;
  positionIcon?: PositionIcon | null | string;
  placeholderColor?: string;
  value: any;
  onChange?: any;
}

const InpuntUI: React.FC<InpuntUIProps> = ({
  type,
  SvgIcon,
  placeholder,
  stylesInput,
  stylesContainer,
  positionIcon,
  placeholderColor,
  onChange,
  backgroundcolor: backgroundColor,
  value,
}: InpuntUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null); // Especifica el tipo HTMLInputElement

  useEffect(() => {

    if (ref.current) {
      ref.current.type = value ? type : "text";
    }
  }, [value, type]);

  return (
    <InputContainer
      backgroundColor={backgroundColor ?? "#ffffff"}
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
        style={stylesInput ?? {}}
        placeholder={placeholder}
        onChange={onChange ?? (() => {})}
        onBlur={() => {
          if (ref.current) {
            ref.current.type = value ? type : "text";
            console.log("onBlur type:", ref.current.type);
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

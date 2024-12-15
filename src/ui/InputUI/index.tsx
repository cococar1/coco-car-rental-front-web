import { useEffect, useRef } from "react";
import { InputContainer } from "./InputUI.style";

enum PositionIcon {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface InputUIProps {
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

const InputUI: React.FC<InputUIProps> = ({
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
}: InputUIProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.type = value ? type : "text";
    }
  }, [value, type]);

  const handleIconClick = () => {
    if (ref.current) {
      ref.current.type = "date"; // Forzamos el tipo de input a "date"
      ref.current.focus(); // Enfocamos el input
      setTimeout(() => ref.current?.click(), 0); // Disparamos el clic después de un breve retraso
    }
  };

  return (
    <InputContainer
      backgroundColor={backgroundColor ?? "#ffffff"}
      width={"200px"}
      style={stylesContainer ? stylesContainer : {}}
      placeholderColor={placeholderColor}
    >
      {positionIcon === PositionIcon.LEFT && (
        <span
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        >
          {SvgIcon}
        </span>
      )}
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
          }
        }}
        value={value}
      />
      {(positionIcon === PositionIcon.RIGHT || positionIcon == null) && (
        <span
          onClick={handleIconClick}
          style={{ cursor: "pointer" }}
        >
          {SvgIcon}
        </span>
      )}
    </InputContainer>
  );
};

export default InputUI;

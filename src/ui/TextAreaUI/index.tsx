import { EventChange } from "@/types/general";
import { ContainerTextArea } from "./TextArea";

interface TextAreaUIProps {
  placeholder: string;
  stylesContainer?: React.CSSProperties;
  stylesInput?: React.CSSProperties;
  value?: string;
  onChange?: any;
}

const TextAreaUI: React.FC<TextAreaUIProps> = ({
  placeholder,
  stylesContainer,
  stylesInput,
  value,
  onChange,
}: TextAreaUIProps) => {
  return (
    <ContainerTextArea style={stylesContainer ? stylesContainer : {}}>
      <textarea
        placeholder={placeholder}
        style={stylesInput ? stylesInput : {}}
        value={value ?? ""}
        onChange={onChange ?? (() => {})}
      ></textarea>
    </ContainerTextArea>
  );
};

export default TextAreaUI;

import { ContainerTextArea } from "./TextArea";

interface TextAreaUIProps {
  placeholder: string;
  stylesContainer?: React.CSSProperties;
  stylesInput?: React.CSSProperties;
}

const TextAreaUI: React.FC<TextAreaUIProps> = ({
  placeholder,
  stylesContainer,
  stylesInput,
}: TextAreaUIProps) => {
  return (
    <ContainerTextArea style={stylesContainer ? stylesContainer : {}}>
      <textarea
        placeholder={placeholder}
        style={stylesInput ? stylesInput : {}}
      ></textarea>
    </ContainerTextArea>
  );
};

export default TextAreaUI;

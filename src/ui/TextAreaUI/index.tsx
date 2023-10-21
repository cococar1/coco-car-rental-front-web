import { ContainerTextArea } from "./TextArea";

interface TextAreaUIProps {
  placeholder: string;
}

const TextAreaUI: React.FC<TextAreaUIProps> = ({
  placeholder,
}: TextAreaUIProps) => {
  return (
    <ContainerTextArea>
      <textarea placeholder={placeholder}></textarea>
    </ContainerTextArea>
  );
};

export default TextAreaUI;

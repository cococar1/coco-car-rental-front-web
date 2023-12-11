import { ContainerCheckBox } from "./checkBox.style";

interface CheckBoxUIProps {
  name: string;
}

const CheckBoxUI: React.FC<CheckBoxUIProps> = ({ name }) => {
  return (
    <ContainerCheckBox>
      <input type="checkbox" id={name} name={name} value={name} />
      <label form={name}> {name}</label>
    </ContainerCheckBox>
  );
};

export default CheckBoxUI;

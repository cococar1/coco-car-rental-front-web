import { ContainerCheckBox } from "./checkBox.style";

interface CheckBoxUIProps {
  name: string;
  onChange?: any;
}

const CheckBoxUI: React.FC<CheckBoxUIProps> = ({ name, onChange }) => {
  return (
    <ContainerCheckBox>
      <input
        type="checkbox"
        id={name}
        name={name}
        value={name}
        onChange={onChange ?? (() => {})}
      />
      <label form={name}> {name}</label>
    </ContainerCheckBox>
  );
};

export default CheckBoxUI;

import React, { ChangeEvent, ReactNode, useState } from "react";
import { ButtonEditable, ContainerItem } from "./EditableField style";
import EditIcon from "@/assets/svgs/EditIcon";
import CheckIcon from "@/assets/svgs/checkIcon";

interface InformationPersonalProps {
  label: string;
  value: string;
  styleContainer?: React.CSSProperties;
  Input: any;
}

const EditableField: React.FC<InformationPersonalProps> = ({
  label,
  value,
  styleContainer,
  Input,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes agregar la lógica para guardar los cambios si es necesario
    setEditing(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
  };

  return (
    <ContainerItem style={styleContainer ?? {}}>
      <div style={{ width: "100%" }}>
        <span>{label}</span>
        {isEditing ? (
          { ...Input }
        ) : (
          // <input type="text" value={editedValue} onChange={handleInputChange} />
          <p> {value}</p>
        )}
      </div>
      {isEditing ? (
        <ButtonEditable onClick={handleSaveClick}>
          <CheckIcon />
        </ButtonEditable>
      ) : (
        <ButtonEditable onClick={handleEditClick}>
          <EditIcon />
        </ButtonEditable>
      )}
    </ContainerItem>
  );
};

export default EditableField;

import {
  ContainerInformation,
  SectionInformationPersonal,
} from "./informationPersona.style";
import EditableField from "../../../components/EditableField/index";
import SelectInputUI from "@/ui/SelectInputUI";
import PhoneInput from "react-phone-input-2";
import Accordion from "@/components/Accordion";

interface InformationPersonalProps {}

const InformationPersonal: React.FC<InformationPersonalProps> = () => {
  return (
    <SectionInformationPersonal>
      <h2>Información personal</h2>
      <ContainerInformation>
        <EditableField
          label="Nombre Completo"
          value="Jose Montenegro"
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <input type="text" value={"editedValue"} onChange={() => {}} />
          }
        ></EditableField>
        <EditableField
          label="Address"
          value="Jose Montenegro"
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <SelectInputUI
              arrayOptions={[
                { id: "MASCULINO", value: "Masculino" },
                { id: "FEMENINO", value: "Femenino" },
                { id: "OTRO", value: "otro" },
              ]}
              placeholder="Select"
              width="100%"
              backgroundColor="#fff"
              stylesContainer={{ color: "#000" }}
            />
          }
        ></EditableField>{" "}
        <EditableField
          label="Email"
          value="Jose Montenegro"
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <input type="email" value={"editedValue"} onChange={() => {}} />
          }
        ></EditableField>
        <EditableField
          label="Phone number"
          value="Jose Montenegro"
          styleContainer={{ borderBottom: "1px solid #EFECF3" }}
          Input={
            <PhoneInput
              country={"us"}
              onChange={(phone) => {
                console.log(phone);
              }}
            />
          }
          //   styleContainer={{  }}
        ></EditableField>
        <EditableField
          label="Address"
          value="Jose Montenegro"
          Input={
            <input type="text" value={"editedValue"} onChange={() => {}} />
          }
        ></EditableField>{" "}
      </ContainerInformation>
    </SectionInformationPersonal>
  );
};

export default InformationPersonal;

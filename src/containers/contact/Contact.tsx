import InpuntUI from "@/ui/InputUI";
import { ContainerContact, ElementContact } from "./contact.style";
import SelectInputUI from "@/ui/SelectInputUI";

interface SectionContactProps {}

const SectionContact: React.FC<SectionContactProps> = () => {
  return (
    <ContainerContact>
      <ElementContact>
        <h2>Let’s collaborate and make an amazing project</h2>
        <div>
          <h3>Phone</h3>
          <p>+ 72 4500 1240</p>
        </div>
        <div>
          <h3>Address</h3>
          <p>123 Lorem Ipsum Street Jakarta, Indonesia</p>
        </div>
      </ElementContact>
      <ElementContact>
        <InpuntUI
          type="email"
          placeholder="E-mail address"
          backgroundColor="#ffffff"
          SvgIcon={<></>}
        />
        <SelectInputUI
          arrayOptions={[]}
          backgroundColor="#ffffff"
          placeholder="Subject"
          width="100%"
        />
      </ElementContact>
    </ContainerContact>
  );
};

export default SectionContact;

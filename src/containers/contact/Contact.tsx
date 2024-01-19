import InpuntUI from "@/ui/InputUI";
import {
  ContainerButton,
  ContainerContact,
  ContainerIconNetwork,
  ElementContact,
  ElementContainerText,
} from "./contact.style";
import SelectInputUI from "@/ui/SelectInputUI";
import TextAreaUI from "@/ui/TextAreaUI";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import FacebookIcon from "@/assets/svgs/facebookIcon";
import InstagramIcon from "@/assets/svgs/instagramIcon";
import TwitterIcon from "@/assets/svgs/twitterIcon";
import { WrapperIconNetworks } from './contact.style';

interface SectionContactProps {}

const SectionContact: React.FC<SectionContactProps> = () => {
  return (
    <ContainerContact>
      <ElementContact>
        <h2>Let’s collaborate and make an amazing project</h2>
        <ElementContainerText>
          <h3>Phone</h3>
          <p>+ 72 4500 1240</p>
        </ElementContainerText>
        <ElementContainerText>
          <h3>Address</h3>
          <p>123 Lorem Ipsum Street Jakarta, Indonesia</p>
        </ElementContainerText>
        <WrapperIconNetworks>
          <ContainerIconNetwork>
            <FacebookIcon />
          </ContainerIconNetwork>
          <ContainerIconNetwork>
            <InstagramIcon />
          </ContainerIconNetwork>
          <ContainerIconNetwork>
            <TwitterIcon />
          </ContainerIconNetwork>
        </WrapperIconNetworks>
      </ElementContact>
      <ElementContact>
        <InpuntUI
          type="email"
          placeholder="E-mail address"
            value={""}
            backgroundColor="#ffffff"
          stylesContainer={{
            width: "474px",
            borderRadius: "0px",
            height: "30px",
            border: "1px solid #AEB7C1",
          }}
          SvgIcon={<></>}
        />
        <SelectInputUI
          arrayOptions={[]}
          backgroundColor="#ffffff"
          placeholder="Subject"
            value={""}
            width="474px"
          stylesContainer={{
            borderRadius: "0px",
            height: "30px",
            border: "1px solid #AEB7C1",
          }}
        />
        <TextAreaUI
          placeholder="Your message here…"
          stylesContainer={{ width: "103.4%" }}
          stylesInput={{
            border: "1px solid #AEB7C1",
            width: "100%",
            borderRadius: "0px",
            marginLeft: "-6px",
            maxWidth: "100%",
            minWidth: "100%",
            maxHeight: "100px",
            minHeight: "100px",
          }}
        />
        <ContainerButton>
          <ButtonPrincipalUI sx={{ borderRadius: "50px" }}>
            Enviar mensaje
          </ButtonPrincipalUI>
        </ContainerButton>
      </ElementContact>
    </ContainerContact>
  );
};

export default SectionContact;

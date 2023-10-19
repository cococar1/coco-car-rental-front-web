import {
  ContainerDescriptionContact,
  ContainerForm,
  ContainerSectionContact,
} from "./contact.style";

interface SectionContactProps {}

const SectionContact: React.FC<SectionContactProps> = () => {
  return (
    <ContainerSectionContact>
      <ContainerDescriptionContact>
        <h2>Subscribe to Our Newsletter for Weekly Article Update.</h2>
        <p>
          We have organization-related blog so we can share our thought and
          rutinity in our blog that updated weekly. We will not spam you, we
          promise.
        </p>
      </ContainerDescriptionContact>
      <ContainerForm></ContainerForm>
    </ContainerSectionContact>
  );
};

export default SectionContact;

import InpuntUI from "@/ui/InputUI";
import Modal from "../Modal";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";

interface ModalLoginProps {
  onclickClose: any;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ onclickClose }) => {
  return (
    <Modal onclickClose={onclickClose}>
      <h1>Iniciar sesión</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Adipiscing venenatis morbi at
        accumsan commodo.
      </p>
      <InpuntUI type="text" />
      <InpuntUI type="text" />
      <ButtonPrincipalUI>Iniciar Sesión</ButtonPrincipalUI>
      </Modal>
  );
};

export default ModalLogin;

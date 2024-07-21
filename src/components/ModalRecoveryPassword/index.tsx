import useScreen from "@/hooks/useScreen";
import Modal from "../Modal";
import { ButtonPrincipalUI } from "../../ui/ButtonPrincipalUi/index";
import InputUI from "@/ui/InputUI";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";

interface ModalRecoveryPasswordProps {
  onclickClose: any;
}

const ModalRecoveryPassword: React.FC<ModalRecoveryPasswordProps> = ({
  onclickClose,
}) => {
  const { width } = useScreen();

  const [email, setEmail] = useState("");
  const { recoveryPassword } = useAuthContext();

  const handleRecoveryPassword = () => {
    recoveryPassword(email);
  };
  return (
    <Modal
      onclickClose={onclickClose}
      styleModal={{
        width: width < 1024 ? "100%" : "33%",
        borderRadius: "15px",
      }}
      styleContent={{ display: "flex", flexDirection: "column", gap: "25px" }}
      title={"Recuperar Contraseña"}
    >
      <div style={{ marginTop: "20px", color: "#2E2D3B" }}>
        <div style={{ margin: "20px 0px", color: "#2E2D3B" }}>
          <p style={{ color: "#2E2D3B" }}>
            Te enviaremos un correo con las instrucciones para recuperar tu
            contraseña. Por favor, revisa tu bandeja de entrada y sigue las
            indicaciones.
          </p>
        </div>

        <InputUI
          SvgIcon={<></>}
          type="email"
          value={email}
          backgroundcolor="#fff"
          placeholder="ejemplo@gmail.com"
          stylesContainer={{ width: "100%", maxWidth: "100%" }}
          stylesInput={{ width: "100%", maxWidth: "100%" }}
          onChange={(e: any) => setEmail(e.target.value)}
        ></InputUI>
      </div>
      <div>
        <ButtonPrincipalUI onClick={handleRecoveryPassword}>
          Enviar codigo
        </ButtonPrincipalUI>
      </div>
    </Modal>
  );
};

export default ModalRecoveryPassword;

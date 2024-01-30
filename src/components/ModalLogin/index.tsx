import InpuntUI from "@/ui/InputUI";
import Modal from "../Modal";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useEffect, useState } from "react";
import EyeOpenIcon from "@/assets/svgs/eyeOpenIcon";
import EyeClosedIcon from "@/assets/svgs/eyeClosedIcon";
import AtSignIcon from "@/assets/svgs/atSignIcon";
import FacebookIcon from "@/assets/svgs/facebookIcon";
import FacebookSecondaryIcon from "@/assets/svgs/FacebookSecondaryIcon";
import GoogleIcon from "@/assets/svgs/googleIcon";

interface ModalLoginProps {
  onclickClose: any;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ onclickClose }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [fromLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  return (
    <Modal
      onclickClose={onclickClose}
      styleModal={{ width: "33%",borderRadius:"15px" }}
      styleContent={{ display: "flex", flexDirection: "column", gap: "25px" }}
    >
      <h1>Iniciar sesión</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Adipiscing venenatis morbi at
        accumsan commodo.
      </p>
      <InpuntUI
        value={fromLogin.email}
        backgroundColor="#fff"
        type="email"
        SvgIcon={<AtSignIcon />}
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        placeholder="example@gmail.com"
        placeholderColor="#7E7E7E"
        onChange={(e) => {
          setFormLogin({
            ...fromLogin,
            email: e.target.value,
          });
        }}
      />

      <InpuntUI
        type={viewPassword ? "text" : "password"}
        placeholder="Password"
        placeholderColor="#7E7E7E"
        value={fromLogin.password}
        backgroundColor="#fff"
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        onChange={(e) => {
          setFormLogin({
            ...fromLogin,
            password: e.target.value,
          });
        }}
        SvgIcon={
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setViewPassword(!viewPassword);
              console.log(viewPassword);
            }}
          >
            {viewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </div>
        }
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "14px",
        }}
      >
        <a href="">Olvidaste la contraseña?</a>
      </div>
      <ButtonPrincipalUI>Iniciar Sesión</ButtonPrincipalUI>
      <div style={{ fontSize: "14px", textAlign: "center" }}>
        <p>O iniciar sesión con social media</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div style={{ cursor: "pointer" }}>
          <GoogleIcon width={30} height={30} />
        </div>
        <div style={{ cursor: "pointer" }}>
          <FacebookSecondaryIcon width={30} height={30} />
        </div>
      </div>
    </Modal>
  );
};

export default ModalLogin;

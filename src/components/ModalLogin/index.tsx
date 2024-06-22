import InputUI from "@/ui/InputUI";
import Modal from "../Modal";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import { useEffect, useState } from "react";
import EyeOpenIcon from "@/assets/svgs/eyeOpenIcon";
import EyeClosedIcon from "@/assets/svgs/eyeClosedIcon";
import AtSignIcon from "@/assets/svgs/atSignIcon";
import FacebookIcon from "@/assets/svgs/facebookIcon";
import FacebookSecondaryIcon from "@/assets/svgs/FacebookSecondaryIcon";
import GoogleIcon from "@/assets/svgs/googleIcon";
import { useAuthContext } from "@/context/AuthContext";
import useScreen from "@/hooks/useScreen";

interface ModalLoginProps {
  onclickClose: any;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ onclickClose }) => {
  const [viewPassword, setViewPassword] = useState(false);
  const { userLogin, userLoginGoogle, userLoginFacebook } = useAuthContext();
  const {width} = useScreen();
  const [fromLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    userLogin(fromLogin.email, fromLogin.password);
  };
  return (
    <Modal
      onclickClose={onclickClose}
      styleModal={{
        width: width < 1024 ? "100%" : "33%",
        borderRadius: "15px",
      }}
      styleContent={{ display: "flex", flexDirection: "column", gap: "25px" }}
      title={"Iniciar sesión"}
    >
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <p style={{ color: "#B4B4B4" }}>
          Nuevo usuario?{" "}
          <a style={{ color: "#E96F45", cursor: "pointer" }}>
            Create una cuenta aquí
          </a>
        </p>
      </div>

      <InputUI
        value={fromLogin.email}
        backgroundcolor="#fff"
        type="email"
        SvgIcon={<AtSignIcon />}
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        placeholder="example@gmail.com"
        placeholderColor="#7E7E7E"
        onChange={(e: any) => {
          setFormLogin({
            ...fromLogin,
            email: e.target.value,
          });
        }}
      />

      <InputUI
        type={viewPassword ? "text" : "password"}
        placeholder="Password"
        placeholderColor="#7E7E7E"
        value={fromLogin.password}
        backgroundcolor="#fff"
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        onChange={(e: any) => {
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
      <ButtonPrincipalUI onClick={submit}>Iniciar Sesión</ButtonPrincipalUI>
      <div style={{ fontSize: "14px", textAlign: "center" }}>
        <p>O iniciar sesión con social media</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ButtonPrincipalUI
          sx={{
            background: "#fff",
            color: "#202020",
            fontWeight: "bold",
            border: "1px solid #DCDBDD",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
          }}
          onClick={() => {
            userLoginGoogle();
          }}
        >
          <GoogleIcon width={25} height={25} />
          Google
        </ButtonPrincipalUI>

        {/* <div style={{ cursor: "pointer" }}>
          <FacebookSecondaryIcon
            onClick={() => {
              userLoginFacebook();
            }}
            width={30}
            height={30}
          />
        </div> */}
      </div>
    </Modal>
  );
};

export default ModalLogin;

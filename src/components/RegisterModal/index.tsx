import { useState } from "react";
import Modal from "../Modal";
import { useAuthContext } from "@/context/AuthContext";
import { CreateUserInput } from "@/hooks/useAuth";
import useScreen from "@/hooks/useScreen";
import InputUI from "@/ui/InputUI";
import AtSignIcon from "@/assets/svgs/atSignIcon";
import { UserRegistrationData } from "@/types/user.type";
import EyeOpenIcon from "@/assets/svgs/eyeOpenIcon";
import EyeClosedIcon from "@/assets/svgs/eyeClosedIcon";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import GoogleIcon from "@/assets/svgs/googleIcon";
import { toast } from "react-toastify";

interface RegisterModalProps {
  onclickClose: any;
  changeLoginPage: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  onclickClose,
  changeLoginPage,
}) => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewRepeatPassword, setViewRepeatPassword] = useState(false);
  const { width } = useScreen();

  const [dataUserRegister, setDataUserRegister] = useState(
    {} as UserRegistrationData
  );
  const { userRegister, userLoginGoogle } = useAuthContext();

  const submit = async () => {
    console.log(dataUserRegister);
    if (dataUserRegister.password !== dataUserRegister.repeatPassword) {
      return toast.warning(`Las contraseñas no coinciden `, {
        position: "bottom-right",
      });
    }

    const { repeatPassword, ...rest } = dataUserRegister;
    userRegister(
      rest,
      () => {
        onclickClose();
      },
      "/"
    );
  };
  return (
    <Modal
      onclickClose={onclickClose}
      title="Registrate aquí"
      styleModal={{
        width: width < 1024 ? "100%" : "33%",
        borderRadius: "15px",
      }}
      styleContent={{ display: "flex", flexDirection: "column", gap: "25px" }}
    >
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <p style={{ color: "#B4B4B4" }}>
          Ya tienes cuenta?{" "}
          <a
            style={{ color: "#E96F45", cursor: "pointer" }}
            onClick={changeLoginPage}
          >
            Ingresa aquí
          </a>
        </p>
      </div>

      <InputUI
        value={dataUserRegister.fullName}
        backgroundcolor="#fff"
        type="fullName"
        SvgIcon={<></>}
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        placeholder="José Montenegro"
        placeholderColor="#7E7E7E"
        onChange={(e: any) => {
          setDataUserRegister({
            ...dataUserRegister,
            fullName: e.target.value,
          });
        }}
      />
      <InputUI
        value={dataUserRegister.email}
        backgroundcolor="#fff"
        type="email"
        SvgIcon={<AtSignIcon />}
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        placeholder="example@gmail.com"
        placeholderColor="#7E7E7E"
        onChange={(e: any) => {
          setDataUserRegister({
            ...dataUserRegister,
            email: e.target.value,
          });
        }}
      />

      <InputUI
        type={viewPassword ? "text" : "password"}
        placeholder="Password"
        placeholderColor="#7E7E7E"
        value={dataUserRegister.password}
        backgroundcolor="#fff"
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        onChange={(e: any) => {
          setDataUserRegister({
            ...dataUserRegister,
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

      <InputUI
        type={viewRepeatPassword ? "text" : "password"}
        placeholder="Repetir Contraseña"
        placeholderColor="#7E7E7E"
        value={dataUserRegister.repeatPassword}
        backgroundcolor="#fff"
        stylesContainer={{ width: "100%", maxWidth: "100%" }}
        onChange={(e: any) => {
          setDataUserRegister({
            ...dataUserRegister,
            repeatPassword: e.target.value,
          });
        }}
        SvgIcon={
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setViewRepeatPassword(!viewRepeatPassword);
              console.log(viewRepeatPassword);
            }}
          >
            {viewRepeatPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </div>
        }
      />
      <ButtonPrincipalUI onClick={submit}>Registrate</ButtonPrincipalUI>
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

export default RegisterModal;

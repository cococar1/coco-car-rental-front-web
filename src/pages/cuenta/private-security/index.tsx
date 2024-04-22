import EyeClosedIcon from "@/assets/svgs/eyeClosedIcon";
import EyeOpenIcon from "@/assets/svgs/eyeOpenIcon";
import { useAuthContext } from "@/context/AuthContext";
import useScreen from "@/hooks/useScreen";
import { InternalLayout } from "@/layouts/Internal.layout";
import { MainLayout } from "@/layouts/Main.layout";
import {
  ContainerItemGrid,
  ContainerTitle,
  GridPrivatePassword,
} from "@/styles/pages/account-private";
import { ButtonPrincipalUI } from "@/ui/ButtonPrincipalUi";
import InputUI from "@/ui/InputUI";
import { useEffect, useState } from "react";

interface SecurityPageProps {}

const SecurityPage: React.FC<SecurityPageProps> = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);

  const { changePassword: changePasswordApi } = useAuthContext();
  const { width } = useScreen();
  const [errorRepeat, setErrorRepeat] = useState(false);
  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });

  const submitChangePassword = async () => {
    await changePasswordApi(
      changePassword.oldPassword,
      changePassword.newPassword,
      changePassword.repeatPassword,
      () => {
        setChangePassword({
          oldPassword: "",
          newPassword: "",
          repeatPassword: "",
        });
      }
    );
  };

  useEffect(() => {
    if (
      changePassword.newPassword !== changePassword.repeatPassword &&
      changePassword.newPassword != "" &&
      changePassword.repeatPassword != ""
    ) {
      setErrorRepeat(true);
    }
    if (
      changePassword.newPassword == "" &&
      changePassword.repeatPassword == ""
    ) {
      setErrorRepeat(false);
    }
  }, [changePassword.newPassword, changePassword.repeatPassword]);

  return (
    <MainLayout changeColorNavBar={true}>
      <InternalLayout>
        <ContainerTitle>
          <h1>Contraseña y seguridad</h1>
          <p>Controla tu constaseña y restaura contraseña</p>
          <h2>Contraseña</h2>
        </ContainerTitle>
        <GridPrivatePassword>
          <ContainerItemGrid>
            <label htmlFor="old-password"> Contraseña actual</label>
            <InputUI
              type={viewPassword ? "text" : "password"}
              placeholder="Password"
              placeholderColor="#7E7E7E"
              value={changePassword.oldPassword}
              backgroundcolor="#fff"
              stylesContainer={{ width: "100%", maxWidth: "100%" }}
              onChange={(e: any) => {
                setChangePassword({
                  ...changePassword,
                  oldPassword: e.target.value,
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
          </ContainerItemGrid>
          <ContainerItemGrid>
            <a href="">olvidaste tu contraseña</a>
          </ContainerItemGrid>
          <ContainerItemGrid>
            <label htmlFor="old-password"> Nueva Contraseña</label>
            <InputUI
              type={newPassword ? "text" : "password"}
              placeholder="Password"
              placeholderColor="#7E7E7E"
              value={changePassword.newPassword}
              backgroundcolor="#fff"
              stylesContainer={{ width: "100%", maxWidth: "100%" }}
              onChange={(e: any) => {
                setChangePassword({
                  ...changePassword,
                  newPassword: e.target.value,
                });
              }}
              SvgIcon={
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setNewPassword(!newPassword);
                    console.log(viewPassword);
                  }}
                >
                  {viewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </div>
              }
            />
          </ContainerItemGrid>
          <ContainerItemGrid>
            {" "}
            <label htmlFor="old-password"> Repite la contraseña</label>
            <InputUI
              type={repeatPassword ? "text" : "password"}
              placeholder="Password"
              placeholderColor="#7E7E7E"
              value={changePassword.repeatPassword}
              backgroundcolor="#fff"
              stylesContainer={{ width: "100%", maxWidth: "100%" }}
              onChange={(e: any) => {
                setChangePassword({
                  ...changePassword,
                  repeatPassword: e.target.value,
                });
              }}
              SvgIcon={
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setRepeatPassword(!repeatPassword);
                    console.log(viewPassword);
                  }}
                >
                  {viewPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </div>
              }
            />
          </ContainerItemGrid>
        </GridPrivatePassword>
        <div
          style={{
            display: "flex",
            marginTop: "10px",
            justifyContent: width < 1024 ? "center" : "start",
            flexDirection: "column",
            alignItems: width < 1024 ? "center" : "start",
          }}
        >
          {errorRepeat && (
            <p style={{ color: "red" }}>contraseña nueva no coincide</p>
          )}
          <ButtonPrincipalUI
            sx={{ width: "300px", marginTop: "50px" }}
            onClick={submitChangePassword}
            styles={{
              opacity: errorRepeat ? 0.5 : 1,
              pointerEvents: errorRepeat ? "none" : "auto",
            }}
          >
            Guardar
          </ButtonPrincipalUI>
        </div>
      </InternalLayout>
    </MainLayout>
  );
};

export default SecurityPage;

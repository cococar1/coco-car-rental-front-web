import Image from "next/image";
import {
  ContainerImageUser,
  ContainerInfoUser,
  ContainerOptionItem,
  ContainerUserAuth,
  OptionsContainer,
  TitleOptions,
} from "./userAuth.style";
import { useAuthContext } from "@/context/AuthContext";
import OptionsNavIcon from "@/assets/svgs/optionsNavIcon";
import Link from "next/link";
import { useState } from "react";

interface UserAuthProps {
  colorprincipal: string;
}

const UserAuth: React.FC<UserAuthProps> = ({
  colorprincipal: colorPrincipal,
}) => {
  const [statusMenu, setStatusMenu] = useState(false);
  const { logout } = useAuthContext();
  return (
    <ContainerUserAuth>
      <ContainerImageUser>
        <Image
          src={
            "/_next/image?url=https%3A%2F%2Fcoco-car-rental.s3.us-east-2.amazonaws.com%2Fcars%2F1704381699377-MAZDA-NEWCX5.jpg&w=3840&q=75"
          }
          alt=""
          fill
        ></Image>
      </ContainerImageUser>
      {statusMenu && (
        <OptionsContainer>
          <TitleOptions>
            <p>Gestionar mi cuenta</p>
          </TitleOptions>
          <div>
            <ContainerOptionItem>
              <Link href={""}>Mis Reservas</Link>
            </ContainerOptionItem>
            <ContainerOptionItem>
              <Link href={""}>Configuración</Link>
            </ContainerOptionItem>
          </div>
        </OptionsContainer>
      )}
      <ContainerInfoUser style={{ color: colorPrincipal }}>
        <h2>Joaquin Torres</h2>
        <a onClick={logout}>Cerrar sesión</a>
      </ContainerInfoUser>
      <div
        onClick={() => {
          setStatusMenu(!statusMenu);
        }}
        style={{cursor: "pointer"}}
      >
        <OptionsNavIcon width={32} height={32} />
      </div>
    </ContainerUserAuth>
  );
};

export default UserAuth;

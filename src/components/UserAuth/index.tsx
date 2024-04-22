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
import { useSession } from "next-auth/react";
import { User } from "@/types/user.type";

interface UserAuthProps {
  colorprincipal: string;
}

const UserAuth: React.FC<UserAuthProps> = ({
  colorprincipal: colorPrincipal,
}) => {
  const [statusMenu, setStatusMenu] = useState(false);
  const { logout,loggedUser:user } = useAuthContext();
  // const { data: session } = useSession();


  return (
    <ContainerUserAuth>
      <ContainerImageUser>
        <Image src={(user as any)?.photo ?? ""} alt="" fill></Image>
      </ContainerImageUser>
      {statusMenu && (
        <OptionsContainer>
          <TitleOptions>
            <p>Gestionar mi cuenta</p>
          </TitleOptions>
          <div>
            <ContainerOptionItem>
              <Link href={"/cuenta/booking"}>Mis Reservas</Link>
            </ContainerOptionItem>
            <ContainerOptionItem>
              <Link href={"/cuenta/personal-information"}>Configuración</Link>
            </ContainerOptionItem>
          </div>
        </OptionsContainer>
      )}
      <ContainerInfoUser style={{ color: colorPrincipal }}>
        <h2>{(user as User)?.fullName}</h2>
        <a onClick={logout}>Cerrar sesión</a>
      </ContainerInfoUser>
      <div
        onClick={() => {
          setStatusMenu(!statusMenu);
        }}
        style={{ cursor: "pointer" }}
      >
        <OptionsNavIcon width={32} height={32} />
      </div>
    </ContainerUserAuth>
  );
};

export default UserAuth;

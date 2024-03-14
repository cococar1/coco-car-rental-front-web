import Link from "next/link";
import {
  ContainerInfoUser,
  InternalNavigationContainer,
  NavItem,
} from "./style";
import UserIcon from "@/assets/svgs/UserIcon";
import CloseIcon from "@/assets/svgs/closeIcon";
import PadLockIcon from "@/assets/svgs/PadLockIcon";
import DocumentIcon from "@/assets/svgs/documentIcon";
import AtSignIcon from "@/assets/svgs/atSignIcon";
import LogOutIcon from "@/assets/svgs/LogOutIcon";
import EmailIcon from "@/assets/svgs/emailIcon";
import PhoneIcon from "@/assets/svgs/PhoneIcon";
import { useRouter } from "next/router";

interface InternalNavigationProps {}

const InternalNavigation: React.FC<InternalNavigationProps> = () => {
  const router = useRouter();
  const mainRoute = router.pathname.split("/")[2];
  console.log(mainRoute, "mainRoute");
  return (
    <InternalNavigationContainer>
      <ContainerInfoUser>
        <h2>Annette Black</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          {" "}
          <PhoneIcon width={22} height={22} />
          <p>(302) 555-0107</p>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <EmailIcon width={25} height={25} />
          <p>annette_black@gmail.com</p>
        </div>
      </ContainerInfoUser>
      <div>
        <NavItem isActive={mainRoute === "personal-information"}>
          <UserIcon
            width={25}
            height={25}
            color={mainRoute === "personal-information" ? "#E96F45" : "#9691A4"}
          />
          <Link href={"/cuenta/personal-information"}>
            Información personal
          </Link>
        </NavItem>
        <NavItem isActive={mainRoute === "private-security"}>
          <PadLockIcon
            width={23}
            height={23}
            color={mainRoute === "private-security" ? "#E96F45" : "#9691A4"}
          />
          <Link href={"/cuenta/private-security"}>Contraseña y seguridad</Link>
        </NavItem>
        <NavItem isActive={mainRoute === "booking"}>
          <DocumentIcon
            width={25}
            height={25}
            color={mainRoute === "booking" ? "#E96F45" : "#9691A4"}
          />
          <Link href={"booking"}>Reservas</Link>
        </NavItem>
        <NavItem>
          <LogOutIcon width={25} height={25} color="#9691A4" />
          <Link href={""}>Cerrar sesión</Link>
        </NavItem>
      </div>
    </InternalNavigationContainer>
  );
};

export default InternalNavigation;

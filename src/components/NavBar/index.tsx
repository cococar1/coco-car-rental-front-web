import Link from "next/link";
import { useState } from "react";
import { colors } from "@/styles/theme";
import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
  BodyMenu,
  CallActionButtons,
  ContainerImageLogo,
  ContainerInfoUserMobile,
  ContainerSubNavMobile,
  HeaderMenu,
  ItemSubNavMobile,
  NavItem,
  NavMobile,
  NavbarContainer,
} from "./navBar.style";
import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";
import { BarsMenu } from "@/ui/BarsMenu";
import { StackMenu } from "@/ui/StackMenu";
import { ButtonSecondaryContainer } from "@/ui/ButtonSecondary/buttonSecondary";
import { useCarContext } from "@/context/CarContext";
import { useBookingContext } from "@/context/BookingContext";
import WrapperModal from "../WrapperModal";
import Modal from "../Modal";
import ModalLogin from "../ModalLogin";
import { User } from "@/types/user.type";
import UserAuth from "../UserAuth";
import Image from "next/image";
import InternalNavigation from "../internalNavigation";
import PhoneIcon from "@/assets/svgs/PhoneIcon";
import EmailIcon from "@/assets/svgs/emailIcon";
import UserIcon from "@/assets/svgs/UserIcon";
import PadLockIcon from "@/assets/svgs/PadLockIcon";
import DocumentIcon from "@/assets/svgs/documentIcon";
import LogOutIcon from "@/assets/svgs/LogOutIcon";

interface NavBarProps {
  user: User | null;
  role: string;
  changeColor?: boolean;
}
export const NavBar: any = ({ user, role, changeColor }: NavBarProps) => {
  const router = useRouter();
  const { setFilter } = useCarContext();
  const { setNewBooking } = useBookingContext();
  const [menuMobile, setmenuMobile] = useState(false);

  const [statusModalLogin, setStatusModalLogin] = useState(false);
  const mainRoute = router.pathname.split("/")[1];
  const scrollPosition = useScrollPosition() > 10;

  return (
    <>
      {statusModalLogin && (
        <>
          <WrapperModal onclick={() => {}} styleWrapper={{}}>
            <ModalLogin
              onclickClose={() => {
                setStatusModalLogin(!statusModalLogin);
              }}
            />
          </WrapperModal>
        </>
      )}
      <NavbarContainer
        $isActive={menuMobile}
        scrollPosition={changeColor ? changeColor : scrollPosition}
      >
        <nav className="desktop">
          <div>
            <picture>
              <div>
                <Link href="/">
                  <ContainerImageLogo>
                    <Image
                      src={
                        scrollPosition
                          ? "/images/logo-without-background.png"
                          : changeColor
                          ? "/images/logo-without-background.png"
                          : "/images/logo-light.png"
                      }
                      fill
                      alt="coco car rental "
                      // priority
                    />
                  </ContainerImageLogo>
                </Link>
              </div>
            </picture>
          </div>
          <ul>
            <NavItem isActive={mainRoute === ""}>
              <Link href="/"> Inicio</Link>
            </NavItem>

            <NavItem isActive={mainRoute === "nosotros"}>
              <Link href="/nosotros"> Sobre nosotros</Link>
            </NavItem>

            <NavItem isActive={mainRoute === "adicionales"}>
              <Link href="/adicionales"> Adicionales</Link>
            </NavItem>

            <NavItem
              isActive={mainRoute === "reservas"}
              onClick={() => {
                setFilter({});
                setNewBooking({});
              }}
            >
              <Link href="/reservas">Reservas</Link>
            </NavItem>

            <NavItem isActive={mainRoute === "preguntas-frecuentes"}>
              <Link href="/preguntas-frecuentes"> FAQ</Link>
            </NavItem>

            <NavItem isActive={mainRoute == "contacto"}>
              <Link href="/contacto"> Contacto</Link>
            </NavItem>
          </ul>
          {!user ? (
            <ul>
              <li>
                <ButtonPrincipalContainer
                  onClick={() => {
                    setStatusModalLogin(!statusModalLogin);
                  }}
                >
                  Iniciar sesión
                </ButtonPrincipalContainer>
              </li>
              <li>
                <ButtonPrincipalContainer
                  style={
                    changeColor
                      ? {
                          color: "#333",
                          fontWeight: "bold",
                          background: "transparent",
                        }
                      : scrollPosition
                      ? {
                          color: "#333",
                          fontWeight: "bold",
                          background: "transparent",
                        }
                      : { background: "transparent" }
                  }
                >
                  Registrate
                </ButtonPrincipalContainer>
              </li>
            </ul>
          ) : (
            <UserAuth
              colorprincipal={
                scrollPosition || changeColor ? colors.titleBlack : "#ffffff"
              }
            ></UserAuth>
          )}
        </nav>

        <nav className="mobile">
          <HeaderMenu>
            <picture>
              <div>
                <Link href="/">
                  {/* <Image
              src="/img/logo.png"
              width={160}
              height={100}
              alt="Logo "
              priority
            /> */}
                  Logo
                </Link>
              </div>
            </picture>
            <BarsMenu onChange={setmenuMobile} $isActive={menuMobile} />
          </HeaderMenu>
          <BodyMenu $isActive={menuMobile}>
            <NavMobile>
              <StackMenu href="/" nameSection="Inicio" />
              <StackMenu href="/nosotros" nameSection="Nosotros" />
              <StackMenu href="/adicionales" nameSection="Adicionales" />
              <StackMenu href="/reservas" nameSection="Reservas" />
              <StackMenu href="/preguntas-frecuentes" nameSection="FAQ" />
              <StackMenu href="/contacto" nameSection="Contacto" />
            </NavMobile>
            {!user ? (
              <CallActionButtons>
                <ButtonPrincipalContainer
                  onClick={() => {
                    setStatusModalLogin(!statusModalLogin);
                  }}
                >
                  Iniciar sesión
                </ButtonPrincipalContainer>

                <ButtonSecondaryContainer>Registrate</ButtonSecondaryContainer>
              </CallActionButtons>
            ) : (
              <ContainerInfoUserMobile>
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
              </ContainerInfoUserMobile>
            )}

            <ContainerSubNavMobile>
              <ItemSubNavMobile isActive={mainRoute === "personal-information"}>
                <UserIcon
                  width={25}
                  height={25}
                  color={
                    mainRoute === "personal-information" ? "#E96F45" : "#9691A4"
                  }
                />
                <Link href={"/cuenta/personal-information"}>
                  Información personal
                </Link>
              </ItemSubNavMobile>
              <ItemSubNavMobile isActive={mainRoute === "private-security"}>
                <PadLockIcon
                  width={23}
                  height={23}
                  color={
                    mainRoute === "private-security" ? "#E96F45" : "#9691A4"
                  }
                />
                <Link href={"/cuenta/private-security"}>
                  Contraseña y seguridad
                </Link>
              </ItemSubNavMobile>
              <ItemSubNavMobile isActive={mainRoute === "booking"}>
                <DocumentIcon
                  width={25}
                  height={25}
                  color={mainRoute === "booking" ? "#E96F45" : "#9691A4"}
                />
                <Link href={"booking"}>Reservas</Link>
              </ItemSubNavMobile>
              <ItemSubNavMobile>
                <LogOutIcon width={25} height={25} color="#9691A4" />
                <Link href={""}>Cerrar sesión</Link>
              </ItemSubNavMobile>
            </ContainerSubNavMobile>
          </BodyMenu>
        </nav>
      </NavbarContainer>
    </>
  );
};

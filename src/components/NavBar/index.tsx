import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { ContainerLogo, NavItem, NavbarContainer } from "./navBar.style";
import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";

interface NavBarProps {
  user: string;
  role: string;
  changeColor?: boolean;
}
export const NavBar: any = ({ user, role, changeColor }: NavBarProps) => {
  const router = useRouter();
  const mainRoute = router.pathname.split("/")[1];
  const scrollPosition = useScrollPosition() > 10;
  console.log(changeColor);
  console.log(router.pathname);
  return (
    <NavbarContainer
      scrollPosition={changeColor ? changeColor : scrollPosition}
    >
      <nav>
        <div>
          <picture>
            <div>
              <Link
                href="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ContainerLogo>
                  <Image
                    src={"/images/logo.png"}
                    fill
                    alt="coco rental"
                  ></Image>
                </ContainerLogo>
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

          <NavItem isActive={mainRoute === "reservas"}>
            <Link href="/reservas">Reservas</Link>
          </NavItem>

          <NavItem isActive={mainRoute === "preguntas-frecuentes"}>
            <Link href="/preguntas-frecuentes"> FAQ</Link>
          </NavItem>

          <NavItem isActive={mainRoute == "contacto"}>
            <Link href="/contacto"> Contacto</Link>
          </NavItem>
        </ul>
        <ul>
          <li>
            <ButtonPrincipalContainer>Iniciar Sessión</ButtonPrincipalContainer>
          </li>
          <li>
            <ButtonPrincipalContainer
              style={
                scrollPosition
                  ? { color: "#e96f45", background: "transparent" }
                  : { background: "transparent" }
              }
            >
              Registrate
            </ButtonPrincipalContainer>
          </li>
        </ul>
      </nav>
    </NavbarContainer>
  );
};

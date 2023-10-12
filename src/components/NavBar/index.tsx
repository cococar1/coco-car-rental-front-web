import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NavItem, NavbarContainer } from "./navBar.style";
import { ButtonPrincipalContainer } from "@/ui/ButtonPrincipalUi/buttonPrincipal.style";
export const NavBar: any = ({ user, role }: { user: string; role: string }) => {
  const router = useRouter();
  const mainRoute = router.pathname.split("/")[1];
  console.log(useScrollPosition());
  const scrollPosition = useScrollPosition() > 10;
  console.log(router.pathname);
  return (
    <NavbarContainer scrollPosition={scrollPosition}>
      <nav>
        <div>
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
        </div>
        <ul>
          <NavItem isActive={true}>
            <Link href="/"> Inicio</Link>
          </NavItem>

          <NavItem isActive={mainRoute === "nosotros"}>
            <Link href="/nosotros"> Sobre nosotros</Link>
          </NavItem>

          <NavItem>
            <Link href="/adicionales"> Adicionales</Link>
          </NavItem>

          <NavItem>
            <Link href="/reservas">Reservas</Link>
          </NavItem>

          <NavItem>
            <Link href="/faq"> FAQ</Link>
          </NavItem>

          <NavItem>
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

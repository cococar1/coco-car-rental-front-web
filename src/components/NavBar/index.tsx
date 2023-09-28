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
  const scrollPosition = useScrollPosition() > 10;

  return (
    <NavbarContainer scrollPosition={scrollPosition}>
      <nav>
        <picture>
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
        </picture>
        <ul>
          <NavItem>
            <Link href="/inicio"> Inicio</Link>
          </NavItem>
        </ul>{" "}
        <ul>
          <NavItem>
            <Link href="/nosotros"> Sobre nosotros</Link>
          </NavItem>
        </ul>{" "}
        <ul>
          <NavItem>
            <Link href="/adicionales"> Adicionales</Link>
          </NavItem>
        </ul>{" "}
        <ul>
          <NavItem>
            <Link href="/reservas">Reservas</Link>
          </NavItem>
        </ul>{" "}
        <ul>
          <NavItem>
            <Link href="/faq"> FAQ</Link>
          </NavItem>
        </ul>
        <ul>
          <NavItem>
            <Link href="/contacto"> Contacto</Link>
          </NavItem>
        </ul>
        <ul>
          <li>
            <ButtonPrincipalContainer>Iniciar Sessión</ButtonPrincipalContainer>
          </li>
        </ul>
      </nav>
    </NavbarContainer>
  );
};

import Link from "next/link";
import { ContainerIconNetworks, NavItemNavFooter } from "./footer.style";
import {
  ContainerFooter,
  ContainerNavFooter,
  ContainerNetworks,
} from "./footer.style";
import FacebookIcon from "@/assets/svgs/facebookIcon";
import InstagramIcon from "@/assets/svgs/instagramIcon";
import TwitterIcon from "@/assets/svgs/twitterIcon";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <ContainerFooter>
      <ContainerNavFooter>
        <NavItemNavFooter>
          <Link href="/"> Inicio</Link>
        </NavItemNavFooter>

        <NavItemNavFooter>
          <Link href="/nosotros"> Sobre nosotros</Link>
        </NavItemNavFooter>

        <NavItemNavFooter>
          <Link href="/adicionales"> Adicionales</Link>
        </NavItemNavFooter>

        <NavItemNavFooter>
          <Link href="/reservas">Reservas</Link>
        </NavItemNavFooter>

        <NavItemNavFooter>
          <Link href="/faq"> FAQ</Link>
        </NavItemNavFooter>

        <NavItemNavFooter>
          <Link href="/contacto"> Contacto</Link>
        </NavItemNavFooter>
      </ContainerNavFooter>
      <ContainerNetworks>
        <ContainerIconNetworks>
          <Link href="/">
            {" "}
            <FacebookIcon></FacebookIcon>
          </Link>
        </ContainerIconNetworks>
        <ContainerIconNetworks>
          <Link href="/">
            {" "}
            <InstagramIcon />
          </Link>
        </ContainerIconNetworks>
        <ContainerIconNetworks>
          <Link href="/">
            {" "}
            <TwitterIcon />
          </Link>
        </ContainerIconNetworks>
      </ContainerNetworks>
      <p>Diseño por MM Design© 2023. Todos los derechos reservados</p>
    </ContainerFooter>
  );
};

export default Footer;

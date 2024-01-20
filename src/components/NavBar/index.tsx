import Link from 'next/link'
import { useState } from 'react'

import { useRouter } from 'next/router'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import {
  BodyMenu,
  CallActionButtons,
  HeaderMenu,
  NavItem,
  NavMobile,
  NavbarContainer
} from './navBar.style'
import { ButtonPrincipalContainer } from '@/ui/ButtonPrincipalUi/buttonPrincipal.style'
import { BarsMenu } from '@/ui/BarsMenu'
import { StackMenu } from '@/ui/StackMenu'
import { ButtonSecondaryContainer } from '@/ui/ButtonSecondary/buttonSecondary'

interface NavBarProps {
  user: string
  role: string
  changeColor?: boolean
}
export const NavBar: any = ({ user, role, changeColor }: NavBarProps) => {
  const router = useRouter()
  const [menuMobile, setmenuMobile] = useState(false)

  const mainRoute = router.pathname.split('/')[1]
  const scrollPosition = useScrollPosition() > 10

  return (
    <NavbarContainer
      $isActive={menuMobile}
      scrollPosition={changeColor ? changeColor : scrollPosition}
    >
      <nav className='desktop'>
        <div>
          <picture>
            <div>
              <Link href='/'>
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
          <NavItem isActive={mainRoute === ''}>
            <Link href='/'> Inicio</Link>
          </NavItem>

          <NavItem isActive={mainRoute === 'nosotros'}>
            <Link href='/nosotros'> Sobre nosotros</Link>
          </NavItem>

          <NavItem isActive={mainRoute === 'adicionales'}>
            <Link href='/adicionales'> Adicionales</Link>
          </NavItem>

          <NavItem isActive={mainRoute === 'reservas'}>
            <Link href='/reservas'>Reservas</Link>
          </NavItem>

          <NavItem isActive={mainRoute === 'preguntas-frecuentes'}>
            <Link href='/preguntas-frecuentes'> FAQ</Link>
          </NavItem>

          <NavItem isActive={mainRoute == 'contacto'}>
            <Link href='/contacto'> Contacto</Link>
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
                  ? { color: '#e96f45', background: 'transparent' }
                  : { background: 'transparent' }
              }
            >
              Registrate
            </ButtonPrincipalContainer>
          </li>
        </ul>
      </nav>

      <nav className='mobile'>
        <HeaderMenu>
          <picture>
            <div>
              <Link href='/'>
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
            <StackMenu href='/' nameSection='Inicio' />
            <StackMenu href='/nosotros' nameSection='Nosotros' />
            <StackMenu href='/adicionales' nameSection='Adicionales' />
            <StackMenu href='/reservas' nameSection='Reservas' />
            <StackMenu href='/preguntas-frecuentes' nameSection='FAQ' />
            <StackMenu href='/contacto' nameSection='Contacto' />
          </NavMobile>
          <CallActionButtons>
            <ButtonPrincipalContainer>Iniciar Sessión</ButtonPrincipalContainer>

            <ButtonSecondaryContainer>Registrate</ButtonSecondaryContainer>
          </CallActionButtons>
        </BodyMenu>
      </nav>
    </NavbarContainer>
  )
}

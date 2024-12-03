import { colors } from "@/styles/theme";
import styled, { css } from "styled-components";

export const ContainerFooter = styled.footer`
  align-items: center;
  background-color: #fafafa;
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 260px;
  p {
    font-size: 14px;
    color:${colors.secondaryBlack};
  }
  a{
    color: ${colors.textBlack};
  }
`;
export const ContainerNavFooter = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 45%;
  list-style: none;
  gap: 10px;
  color: #222a41;
  justify-content: space-evenly;

  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 5px;
  }
`;

export const NavItemNavFooter = styled.li<{ isActive?: boolean }>`
  position: relative;

  a {
    text-decoration: none;
    color: #222a41;
    &:hover {
      color: #e96f45;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      a {
        color: #e96f45;
      }
    `}

  @media (max-width: 768px) {
    font-size: 14px; /* Ajustar tamaño de texto */
    margin: 5px; /* Ajustar espacio entre elementos */
  }
`;

export const ContainerNetworks = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Ajustar el ancho al contenedor */
    justify-content: center; /* Centrar los íconos */
    gap: 5px; /* Reducir el espacio entre los íconos */
  }
`;

export const ContainerIconNetworks = styled.div`
  cursor: pointer;
  width: 45px;
  height: 40px;
  border-radius: 50%;
  background-color: #e96f45;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 35px; /* Reducir el tamaño del botón en pantallas pequeñas */
    height: 35px;

   
  }
`;

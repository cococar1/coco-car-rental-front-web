import styled, { css } from "styled-components";

export const ContainerFooter = styled.footer`
  align-items: center;
  /* background-color: red; */
  text-align: center;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 260px;
  p {
    font-size: 14px;
    color: #6d7783;
  }
`;

export const ContainerNavFooter = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 45%;
  list-style: none;
  color: #222a41;
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
`;
export const ContainerNetworks = styled.div`
  display: flex;
  width: 15%;
  justify-content: space-around;
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
  svg {
    /* height: 34; */
  }
`;

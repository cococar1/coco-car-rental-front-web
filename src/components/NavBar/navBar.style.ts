import styled, { css } from "styled-components";
import { colors } from "@/styles/theme";

export const NavbarContainer = styled.header<{
  scrollPosition: boolean;
  $isActive: boolean;
}>`
  background-color: #fff;
  transition: 0.5s;
  background: transparent;
  ${({ scrollPosition }) =>
    scrollPosition &&
    css`
      nav {
        transition: 0.5s;
        background: white !important;
      }
      a {
        /* color: #e96f45 !important; */
        color: ${colors.titleBlack} !important;
      }
    `};
  box-shadow: ${({ scrollPosition }) =>
    scrollPosition &&
    "0px 2px 8px -4px rgba(31,27,45,0.12), 0px 4px 16px rgba(31,27,45,0.5)"};

  position: sticky;
  width: 100%;
  z-index: 10000;
  top: 0;
  /* height: 60px; */
  .mobile {
    display: block;
    width: 100%;
    height: 80px;
    transition: all 1s ease-out 0s;
    background-color: transparent;
    ${({ $isActive }) =>
      $isActive &&
      css`
        transition: all 1s ease-out 0s;
        background-color: #fff;
      `}
    @media (width >= 1024px) {
      display: none;
      background-color: #fff;
    }
  }

  .desktop {
    display: none;
    height: 80px;
    @media (width >= 1024px) {
      display: flex;
    }
  }
  nav {
    display: none;
    align-content: center;
    justify-content: space-between;

    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    height: 40px;
    padding: 20px 30px;

    @media (width >= 1024px) {
      display: flex;
      padding: 20px 100px;
    }

    ul {
      align-items: center;
      display: flex;
      list-style: none;
      gap: 50px;
      display: flex;
      justify-content: space-between;
      li {
        padding: 4px;
      }
    }

    ul:nth-child(2) {
      width: 60%;
      margin-right: 50px;
    }
    ul:nth-child(3) {
      gap: 0px;
      padding: 0;
      justify-content: center;
    }
  }
`;
export const ContainerImageLogo = styled.div`
  width: 100px;
  height: 40px;
  position: relative;
  & img {
    object-fit: contain;
  }
`;
export const NavItem = styled.li<{ isActive?: boolean }>`
  position: relative;

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: #e96f45;
    }
  }
  ${({ isActive }) =>
    isActive &&
    css`
      a {
        color: #fb7f57 !important;
        font-weight: 800;
        font-size: 16px;
      }
    `}
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  picture {
    width: 40px;
  }
`;

export const BodyMenu = styled.div<{ $isActive: boolean }>`
  visibility: hidden;
  transition: all 0.5s ease;
  opacity: 0;
  background-color: #fff;
  position: fixed;
  top: -100vh;
  left: 0;
  right: 0;
  height: 100vh;
  transition: all 1s ease-out 0s;
  ${({ $isActive }) =>
    $isActive &&
    css`
      top: 70px;
      opacity: 1;
      visibility: visible;
      transition: all 1s ease-out 0s;
    `}
`;
export const NavMobile = styled.div`
  display: grid;
  gap: 20px;
  margin-top: 30px;
`;

export const CallActionButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  padding: 0 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfoUserMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  & h2 {
    font-weight: bold;
  }
`;

export const ContainerSubNavMobile = styled.div``;

export const ItemSubNavMobile = styled.div<{ isActive?: boolean }>`
  border-top: 2px solid #efecf3;
  padding: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  /* text-align: center; */
  &:hover {
    border-left: 3px solid #e96f45;
  }
  a {
    text-decoration: none;
    color: black;

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
      border-left: 3px solid #e96f45;
    `}
`;

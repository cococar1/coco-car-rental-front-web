import styled, { css } from "styled-components";
import { colors } from "@/styles/theme";
export const NavbarContainer = styled.header<{
  scrollPosition: boolean;
  //   openModal: boolean;
}>`
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
  z-index: 10000;
  top: 0;
  /* height: 60px; */

  nav {
    display: flex;
    align-content: center;
    justify-content: space-between;

    /* height: inherit; */
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    height: 40px;
    /* width: 90%; */
    /* max-width: 95vw; */
    /* margin-right :1000px; */
    /* padding: 0 240px; */
    /* padding-left: 10px; */
    /* background-color: black; */
    padding: 20px 100px;
    /* padding-right: 200px; */
    /* padding-left: 200px; */

    ul {
      align-items: center;
      display: flex;
      /* background-color: blue; */
      list-style: none;
      gap: 50px;
      display: flex;
      justify-content: space-between;
      li {
        padding: 4px;
      }
    }

    div {
      width: 200px;
      /* background-color: red; */
    }
    ul:nth-child(2) {
      width: 60%;
      margin-right: 50px;
    }
    ul:nth-child(3) {
      /* background-color: red !important; */
      gap:0px;
      padding: 0;
      justify-content:center;
    }
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
        color: #e96f45 !important;
      }
    `}
`;

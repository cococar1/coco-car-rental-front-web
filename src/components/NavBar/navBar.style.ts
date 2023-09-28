import styled, { css } from "styled-components";

export const NavbarContainer = styled.header<{
  scrollPosition: boolean;
  //   openModal: boolean;
}>`
  background-color: #392001;
  background-color: ${({ scrollPosition }) => scrollPosition && "#FFF"};
  box-shadow: ${({ theme, scrollPosition }) =>
    scrollPosition &&
    "0px 2px 8px -4px rgba(31,27,45,0.12), 0px 4px 16px rgba(31,27,45,0 "};
  position: sticky;
  z-index: 1000;
  top: 0;
  height: 60px;

  nav {
    display: flex;

    align-content: center;
    height: inherit;
    width: 100%;
    max-width: 90rem;
    margin: auto;
    padding: 0 24px;
  }
`;

export const NavItem = styled.li<{ isActive?: boolean }>`
  position: relative;
  list-style: none;
  color: #ffffff;
  ${({ isActive }) =>
    isActive &&
    css`
      color: #e96f45;
    `}

  a {
    text-decoration: none;
    color: #ffffff;
    &:hover {
      color: #e96f45;
    }
  }
`;

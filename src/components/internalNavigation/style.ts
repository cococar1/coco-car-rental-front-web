import styled, { css } from "styled-components";

export const InternalNavigationContainer = styled.div`
  height: 100%;
  align-items: center;
  /* background-color: yellow; */
  justify-content: space-between;
  /* background-color: red; */
  box-shadow: 0px 0px 10px 0px #1f1b2d14;
  width: 350px;
  height: 500px;
  position: fixed;
`;

export const NavItem = styled.div<{ isActive?: boolean }>`
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

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  & h2 {
    font-weight: bold;
  }
`;

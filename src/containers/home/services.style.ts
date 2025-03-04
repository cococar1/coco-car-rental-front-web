import styled from "styled-components";

export const ContainerService = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 86%;

  justify-content: center;
  top: 0;
  @media (width >= 375px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (width >= 1024px) {
    display: flex;
  }
 
`;

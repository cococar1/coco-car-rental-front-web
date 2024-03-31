import styled from "styled-components";

export const ContainerSectionSearch = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  h2 {
    font-size: 40px;
  }
  & div {
    width: 40%;
  }

  @media (width <= 1024px) {
    /* background-color: red; */
    width: 100%;
    h2 {
      font-size: 35px;
    }
    & div {
      width: 80% !important;
    }
  }
`;

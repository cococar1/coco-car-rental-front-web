import styled from "styled-components";

export const ContainerPageBooking = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: red; */
  width: 100%;
  padding: 30px 0px;

  @media (width < 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    /* background-color: yellow !important; */
    width: 100%;
  }
`;

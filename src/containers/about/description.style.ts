import styled from "styled-components";

export const SectionDescriptionContainer = styled.section`
  padding: 100px 0px;
  display: flex;
  justify-content: center;
  gap: 50px;
  div {
    img {
      width: 554px;
      height: 476px;
    }
  }
  @media (width <= 1024px) {
    flex-direction: column;
    align-items: center;
    & div {
      img {
        width: 354px;
        height: 276px;
      }
    }
  }
`;

export const ContainerTextDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 476px;
  justify-content: center;
  gap: 50px;
  div {
    text-align: center;
    p {
      color: #888888;
      font-size: 25px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (width <= 924px) {
    align-items: center;
    /* background-color: red; */

    width: 100%;
    & p {
      width: 100%;
      padding: 20px;
    }
  }
`;

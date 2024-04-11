import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;

  flex-direction: column;
  background-color: #ffffff;
  padding: 30px;
  max-width: 400px;
`;

export const ContainerImageTitle = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h2 {
    font-size: 25px;
    margin-top: 20px;
  }
`;
export const ContainerImagePrincipal = styled.div`
  width: 200px;
  img {
    position: relative !important;
    object-fit: cover !important;
    width: 100%;
    height: auto;
  }
`;

export const ContainerCharacteristics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    padding: 5px;
    margin-left: 5px;
    align-items: center;
    p {
      margin-left: 1px;
    }

    @media (width >= 1024px) {
      display: flex;
      gap: 5px;
    }
  }

  @media (width >= 1024px) {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
`;

export const ContainerContent = styled.div`
  align-items: center;
  margin-top: 20px;
  h3 {
    font-style: normal;
    font-size: 16px;
    text-align: center;

    width: 100%;
    line-height: normal;
    font-weight: 500;
  }
  p {
    margin-top: 15px;
    font-size: 14px;
    text-align: center;
    width: 95%;
    color: var(--deshabilitado, #a8b0bb);
  }
`;

export const ContainerPrice = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  margin-top: 25px;
  padding: 10px;
  text-align: center;
`;

import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 30px; */
  width: 350px;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
`;

export const ContainerImageTitle = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  padding: 30px;
`;

export const ContainerContent = styled.div`
  padding: 20px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    margin-bottom: 10px;
  }
`;
export const ContainerImagePrincipal = styled.div`
  img {
    position: relative !important;
    object-fit: contain !important;
    width: 100%;
    height: auto;
  }
  /* background-color: red; */
  height: 300px;
`;

export const ContainerCharacteristics = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  justify-content: space-between;
  margin-top: 10px;

  div {
    display: flex;
    /* padding: 5px; */
    margin-left: 5px;
    align-items: center;
    p {
      margin-left: 1px;
    }
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ContainerPrice = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  margin-top: 25px;
  padding: 10px;
  text-align: center;
  width: 50%;
`;

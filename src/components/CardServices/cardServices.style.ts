import styled from "styled-components";

export const ContainerCardService = styled.div`
  background-color: #ffffff;
  position: relative;
  flex-shrink: 0;
  width: 350px;
  height: 360px;
  border-radius: 16px;
  align-items: center;

  display: flex;
  justify-content: center;
  box-shadow: 0.3em 0.5em 1em rgba(0, 0, 0, 0.2);
`;
export const ContainerTextCardService = styled.div`
  width: 276px;
  height: 80%;
  h2 {
    margin-top: 65px;
    width: 290px;
    font-size: 20px;
    font-weight: bold;
    color:#313E50;
  }
  p {
    color:#313E50;
    width: 276px;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;
export const ContainerIcon = styled.div`
  position: absolute;
  top: -50px;
  left: 50px;
  z-index: 100;
  width: 100px; /* Ancho del círculo */
  height: 100px; /* Altura del círculo */
  border-radius: 50%; /* Hace que el div sea un círculo */
  box-shadow: 0.3em 0.5em 1em rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import styled from "styled-components";

export const NewModal = styled.div`
  /* position: absolute; */
  /* width: 35%; */
  /* height: 300px; */
  background-color: #fff;
  z-index: 10000;
  /* right: 0; */
  /* top: 0; */
  padding: 50px 30px;
`;

export const ContainerHeaderOptions = styled.div`
  display: flex;
  height: 25px;
  align-content: center;
  justify-content: end;

`;

export const ContainerContent = styled.div`
  height: 97%;
  overflow: auto;
  padding-right: 10px;
  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 6px; /* Tamaño del scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #313e50;
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px; /* Esquinas redondeadas */

    background-color: #e0e2e5; /* Color del track (fondo del scrollbar) */
  }
`;
export const ContainerBottom = styled.div`
  height: 10%;
`;

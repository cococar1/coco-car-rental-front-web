import styled from "styled-components";

export const ContainerFilterPanel = styled.section`
  padding: 25px;
  width: 25dvw;
  height: 100%;
  background-color: #ffffff;
  h2 {
    font-size: 20px;
  }
`;

export const ContainerDate = styled.div`
  margin-top: 20px;
  border-top: 2px solid rgba(213, 221, 234, 0.47);
  border-bottom: 2px solid rgba(213, 221, 234, 0.47);
  background-color: #ffffff;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 250px;
  div {
    display: flex;
    gap: 10px;
  }
`;
export const ContainerCheckBoxScroll = styled.div`
  margin-top: 10px;
  height: 150px;
  width: 100%;

  overflow-y: auto;
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
export const ContainerFeature = styled.div`
  padding: 10px 0;
  height: 100%;
  h2 {
    font-size: 20px;
  }
`;

export const ContainerModel = styled.div`
  margin-top: 10px;
  h2 {
    font-size: 20px;
  }
`;

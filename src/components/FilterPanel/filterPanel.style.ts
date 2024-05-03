import styled from "styled-components";

export const ContainerFilterPanel = styled.section`
  padding: 25px;
  width: 330px;
  height: 100%;
  background-color: #ffffff;
  h2 {
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    width: 90%;
    padding: 0px;
  }
`;

export const TitleFilter = styled.h2`
 font-weight: 600;
  @media (max-width: 1024px) {
    display: none;
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
  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export const ContainerFilterSecondary = styled.div`
`;

export const ButtonFilterOption = styled.button`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #fff;
  width: 100%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Box-shadow sutil */
  cursor: pointer;
`;
export const OptionFilter = styled.div`
  margin-bottom: 10px;
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
    font-weight: 600;
  }
`;

export const ContainerSimpleElement = styled.div`
  margin-top: 10px;
  h2 {
    font-size: 20px;
     font-weight: 600;
  }
`;

export const ContainerInputYears = styled.div`
  display: flex;
  align-items: center;
`;

export const LineYear = styled.div`
  height: 2px;
  width: 10%;
  background-color: #313e50;
`;

export const ContainerContentElementCheckBook = styled.div`
  margin-top: 20px;
`;

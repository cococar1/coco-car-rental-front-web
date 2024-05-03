import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;

  justify-content: center;
  gap: 8%;
  margin-bottom: 120px;
  margin-top: 80px;

  @media (width < 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    gap:90px

  }
`;

export const ElementContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 474px;
  height: 320px;
  gap: 10px;
  justify-content: space-around;
  h2 {
    font-weight: bold;
    text-align: left;
    font-size: 34px;
    color: #E96F45
    
  }

  @media (width < 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ElementContainerText = styled.div`
/* margin-top:10px; */
  h3 {
    font-weight: 400;
  }
  text-align: left;
`;
export const ContainerButton = styled.div`
  width: 100%;

  @media (width < 1024px) {
  }
`;

export const ContainerIconNetwork = styled.div`
  cursor: pointer;
  width: 45px;
  height: 40px;
  border-radius: 50%;
  background-color: #e96f45;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    fill: red;
  }
`;
export const WrapperIconNetworks = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-around;
`;

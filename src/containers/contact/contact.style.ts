import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;

  /* background-color: blue; */
  justify-content: center;
  gap: 8%;
  margin-bottom: 120px;

`;

export const ElementContact = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px; */
  align-items: end;
  /* background-color: red; */
  width: 474px;
  height: 320px;
  gap: 10px;
  justify-content: space-around;
  h2 {
    font-weight: 400;
    text-align: right;
  }
`;

export const ElementContainerText = styled.div`
  h3 {
    font-weight: 400;
  }
  text-align: right;
`;
export const ContainerButton = styled.div`
  /* background-color: blue; */
  width: 100%;
  margin-right: 22px;
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
    /* height: 34; */
    fill: red;
  }
`;
export const WrapperIconNetworks = styled.div`
  /* background-color: red; */
  display: flex;
  width: 35%;
  justify-content: space-around;
`;
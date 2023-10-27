import styled from "styled-components";

export const SectionServicesContainer = styled.section`
  /* background-color: blue; */
  height: 650px;
  position: relative;
`;

export const ContainerTextServices = styled.div`
  background: #222;
  display: flex;
  gap: 20px;
  height: 70%;
  justify-content: center;
`;

export const ContainerTitles = styled.div`
  width: 25%;
  padding: 20px;
  margin-top: 45px;
  p {
    color: #888888;
    font-size: 25px;
  }
  h2 {
    color: #ffffff;
    font-size: 30px;
  }
`;
export const ContainerText = styled.div`
  width: 25%;
  padding: 20px;
  margin-top: 45px;
  p {
    color: #ffffff;
    margin-bottom: 10px;
    font-size: 15px;
  }
`;
export const ContainerServices = styled.div`
margin-top: 10px;
  position: absolute;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  width:100%;
  gap: 30px;
  bottom: 0;
  padding: 20px;
`;

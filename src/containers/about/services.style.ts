import styled from "styled-components";

export const SectionServicesContainer = styled.section`
  height: 650px;
  position: relative;
  @media (width < 1022px) {
    height: 100%;
  }
`;

export const ContainerTextServices = styled.div`
  background: #222;
  display: flex;
  gap: 20px;
  height: 70%;
  justify-content: center;
  @media (width < 1022px) {
    height: 100%;
    flex-direction: column;
    height: 100%;
  }
  @media(width > 1000px){
    gap: 220px;

  }
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
     font-weight: 600;
  }
  @media (width < 1022px) {
    width: 100%;
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
  @media (width < 1022px) {
    width: 100%;
  }
`;
export const ContainerServices = styled.div`
  margin-top: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
  color:#313E50;
  bottom: 0;
  padding: 20px;
  @media (width < 1022px) {
    display: flex;

    flex-direction: column;
    position: relative;
    align-items: center;
    gap: 100px;
  }
`;

import styled from "styled-components";

export const ContainerMainFrom = styled.div`
  position: relative;
  height: 790px;
  margin-top: -80px;
`;

export const ContainerMainFromImage = styled.div`
  position: absolute;
  background-image: url("/images/background-card-principal.png");
  background-position: bottom;
  background-size: cover;
  padding: 0;
  width: 100%;
  height: 790px;
`;

export const ContainerBackground = styled.div`
  position: absolute;
  background: linear-gradient(
    121deg,
    rgba(0, 0, 0, 0.1) 41.28%,
    rgba(0, 0, 0, 0) 52.46%,
    rgba(0, 0, 0, 0) 69.95%
  );
  width: 100%;
  height: 790px;
`;

export const ContainerContentHome = styled.div`
  padding: 70px 250px;
`;

export const ContainerContentServiceHome = styled.div`
  div {
    text-align: center;

    /* margin-bottom: 60px; */
    /* padding-bottom: 50px; */
    /* background-color: red; */
    /* display: flex; */
    /* height: 500px; */
    
    /* padding-bottom: 50px; */
    h2 {
      font-size: 30px;
    }
    p {
      margin-top: 20px;
      font-size: 14px;
      color: var(--deshabilitado, #a8b0bb);
      margin-bottom: 50px;
    }
  }
`;

import styled from "styled-components";
import { colors, font } from "../../styles/theme";
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
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    line-height: normal;

    /* margin-bottom: 60px; */
    /* padding-bottom: 50px; */
    /* display: flex; */
    /* height: 500px; */

    /* padding-bottom: 50px; */
    h2 {
      font-size: 30px;
      color: ${colors.titleBlack};

      font-weight: ${font.fontWeightTitle};
    }

    p {
      margin-top: 20px;
      font-size: 14px;
      color: ${colors.secondaryBlack};
      margin-bottom: 50px;
    }
  }
`;

export const ContainerFormHome = styled.div`
  position: absolute;
  width: 464px;
  height: 45%;
  z-index: 100;
  top: 0;
  bottom: 0;
  transform: translate(50%, 50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerTextFormHome = styled.div`
  width: 464px;

  h1 {
    color: #ffffff;
    font-size: 40px;
    text-align: start;
    font-weight: ${font.fontWeightTitle};
  }
  p {
    margin-top: 10px;
    color: #ffffff;
    font-weight:200;
  }
`;

export const ContainerFormHomeInputs = styled.form`
  display: flex;
  flex-direction: column;
  div{
    margin-top: 5px;
  }
`;

export const FormHomeContainerSelect =styled.div`
margin-top: 20px !important;

`
export const FormHomeContainerColumn = styled.div`
  display: flex;
  gap: 20px;

  div {
    /* background-color: black;
  display: flex;
  flex-direction: column; */
    div {
      margin-top: 20px;
    }
  }
`;


export const ContainerButtonForm =styled.div`
width: 100%;
margin-top: 20px;
`
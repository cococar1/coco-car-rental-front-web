import styled from "styled-components";
import { colors, font } from "../../styles/theme";
export const ContainerMainFrom = styled.div`
  position: relative;
  height: 480px;
  margin-top: -80px;

  @media (width>= 1024px) {
    height: 790px;
  }
`;

export const ContainerMainFromImage = styled.div`
  position: absolute;
  top: 0;
  background-image: url("/images/background-card-principal.png");
  background-position: bottom;
  background-size: cover;
  padding: 0;
  width: 100%;
  height: 480px;
  @media (width>= 1024px) {
    height: 790px;
  }
`;

export const ContainerBackground = styled.div`
  position: absolute;

  background: linear-gradient(
    121deg,
    rgba(14, 14, 22, 0.6195071778711485) 7%,
    rgba(24, 24, 26, 0.2357536764705882) 52%,
    rgba(14, 16, 16, 0.6671262254901961) 91%
  );
  width: 100%;
  height: 480px;

  @media (width>= 1024px) {
    height: 790px;
    /* background: linear-gradient(
      121deg,
      rgba(0, 0, 0, 0.1) 41.28%,
      rgba(0, 0, 0, 0) 80.46%,
      rgba(0, 0, 0, 0) 69.95%
    ); */
  }
`;

export const ContainerContentHome = styled.div`
  display: flex;
  padding: 20px 0px;
  @media (width>= 1024px) {
    display: flex;
    padding: 70px 0px;
  }
`;

export const ContainerContentServiceHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      font-size: 20px;
      color: ${colors.titleBlack};
      font-weight: ${font.fontWeightTitle};
      @media (width>= 1024px) {
        font-size: 30px;
      }
    }

    p {
      margin-top: 20px;
      font-size: 12px;
      color: ${colors.secondaryBlack};
      margin-bottom: 50px;

      @media (width >= 1024px) {
        font-size: 14px;
      }
    }
  }
`;

export const ContainerFormHome = styled.div`
  position: absolute;
  z-index: 100;
  top: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  width: 300px;
  left: calc(50% - 150px);

  @media (width >=425px) {
    width: 90%;
    left: 20px;
    max-width: 400px;
  }

  @media (width >= 1024px) {
    transform: translate(50%, 30%);
    height: 80%;
    top: 0;
  }
`;

export const ContainerTextFormHome = styled.div`
  width: 90%;

  h1 {
    color: #ffffff;
    font-size: 20px;
    text-align: start;
    font-weight: ${font.fontWeightTitle};

    @media (width >= 1024px) {
      font-size: 40px;
    }
  }
  p {
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    color: #ffffff;
    font-weight: 200;
  }

  @media (width >= 1024px) {
    width: 100%;
    width: 500px !important;
    margin-right: -100px;
  }
`;

export const ContainerFormHomeInputs = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    margin-top: 5px;
  }
`;

export const FormHomeContainerSelect = styled.div`
  margin-top: 20px !important;
  margin: 10px auto;
  width: 100%;
`;
export const FormHomeContainerColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin: 0 auto;
  gap: 20px;

  div {
    /* background-color: black;
  display: flex;
  flex-direction: column; */
    div {
      margin-top: 10px;
      @media (width >= 1024px) {
        margin-top: 20px;
      }
    }
  }
`;

export const ContainerButtonForm = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (width>= 1024px) {
    height: 790px;
    width: 100%;
  }
`;

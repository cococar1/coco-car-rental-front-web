import { font } from "@/styles/theme";
import styled from "styled-components";

export const SectionBannerContainer = styled.section`
  width: 100%;
  padding-bottom: 50px;
  margin-top: -80px;
  position: relative;
  overflow: hidden;
`;

export const BannerImage = styled.div`
  width: 110%;
  margin-left: -5%;
  height: 500px;
  /* border: 2px solid white; */
  border-radius: 0px 0% 80% 80%;
  background-image: url("/images/banner-about.jpg");
  /* background-position: bottom; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px calc(100% + 400px);
  @media screen and (max-width: 1247px) {
    background-color: red !important;
    background-size: cover;
    background-position: 0px calc(100% + 150px);
  }
  @media screen and (max-width: 1022px) {
    background-color: red !important;
    background-size: cover;
    background-position: 0px calc(100% - 0px);
  }
`;
export const ContainerBackground = styled.div`
  width: 110%;
  position: absolute;
  top: 0;
  margin-left: -5%;
  height: 500px;
  z-index: 100;
  border-radius: 0px 0% 80% 80%;
  background: linear-gradient(
    155deg,
    rgba(0, 0, 0, 0.4) 44.35%,
    rgba(69, 67, 67, 0.22) 83.92%
  );
`;

export const ContainerTextAbout = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 31%;
  left: 33%;
  width: 552px;
  text-align: center;
  color: #ffffff;
  height: 40%;

  h1 {
    font-size: 47.586px;
    font-weight: ${font.fontWeightTitle};
  }
  p {
    font-size: 18px;
    font-weight: ${font.fontWeightText};
  }

  @media screen and (min-width: 1700px) {
    left: 35%;
  }
  @media screen and (max-width: 1247px) {
    top: 25%;
    left: 25%;
  }
  @media screen and (max-width: 1022px) {
    /* background-color: red; */

    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* background: yellow; */
    padding: 0px 30px;
    & h1 {
      font-size: 35px;
    }
    & p {
      font-size: 15px;
      padding: 10px 60px;
      /* background: red; */
      /* width:90%; */
      /* margin: 0px 10px; */
      text-align: center;
    }
  }
  & button {
    @media screen and (max-width: 1022px) {
      /* background-color: red; */

      width: 300px;
    }
  }
`;

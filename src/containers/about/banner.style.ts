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
  left: 35%;
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
`;

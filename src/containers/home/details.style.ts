import { colors, font } from "@/styles/theme";
import styled from "styled-components";

export const ContainerDetails = styled.div`
  text-align: center;
  padding: 20px;
  height: 700px;
  /* padding: 50px 0px; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    color: ${colors.titleBlack};
    font-weight: ${font.fontWeightTitle};
  }
  p {
    color: ${colors.secondaryBlack};
  }
`;

export const ContainerDetailsContent = styled.div`
  display: flex;
`;
export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  p {
    margin-top: 8px;
  }
`;

export const DetailImageContent = styled.div`
  position: relative;
  width: 400px;
  align-items: center;
  /* background-color: blue; */
  .auto {
    position: absolute;
    /* background-color: red; */
    margin: 0;
    padding: 0;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    /* bottom:0; */
  }
`;

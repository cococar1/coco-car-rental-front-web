import { colors, font } from "@/styles/theme";
import styled from "styled-components";

export const SecctionNewAutos = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  /* justify-content: center; */
  text-align: center;
  h2 {
    font-size: 30px;
    color: ${colors.titleBlack};

    font-weight: ${font.fontWeightTitle};
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    color: ${colors.secondaryBlack};
  }
`;

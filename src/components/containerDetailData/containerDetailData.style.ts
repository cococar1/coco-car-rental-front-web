import { colors } from "@/styles/theme";
import styled from "styled-components";

export const ContainerDetailDataElement = styled.div`
  display: flex;
`;
export const ContainerIcon = styled.div`
  margin: 0px 10px;
`;

export const DetailDataElementText = styled.div`
  /* text-align: right; */
  width: 376px;
  font-size: 14px;
  h2 {
    font-size: 18px;
    color: ${colors.titleBlack};
  }
  p {
    color: ${colors.secondaryBlack};
  }
`;

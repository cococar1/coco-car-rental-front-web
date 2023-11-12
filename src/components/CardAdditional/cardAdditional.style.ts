import { colors } from "@/styles/theme";
import styled from "styled-components";

export const ContainerCardAdditional = styled.div`
  width: 306px;
  /* height: 333px; */

  padding: 60px 20px;
  border: 1px solid #aeb7c1;
  padding-top:30px;
`;

export const ContainerTicket = styled.div`
  p {
    color: #6d7783;
    font-size: 14px;
  }
  p:first-child {
    color: #222a41;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const ContainerContent = styled.div`
  margin-top: 25px;
  h2 {
    color: ${colors.textOrage};
    font-size: 26px;
  }
  p {
    margin-top: 15px;
    font-size: 18px;
    text-align: left;
  }
`;

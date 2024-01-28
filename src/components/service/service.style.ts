import { colors } from "@/styles/theme";
import styled from "styled-components";

export const ContainerService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 260px;
  max-height: 400px;

  /* padding-top: 40px; */
  /* padding-bottom: 0; */
  background: #fafafa;
  border-radius: 20px;
  text-align: center;
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 10px;
  /* padding-bottom: 0; */
  div {
    height: 60px;
    padding: 0;
  }

  h3 {
    color: ${colors.textBlack};
    font-size: 14px;
    font-weight: 400;
    /* padding: 0px 20px; */
    padding-top: 0px;
  }
  p {
    font-size: 12px;
    color: ${colors.secondaryBlack};
  }
  @media (width >= 375px) {
    div {
      height: 60px;
      padding: 20px;
    }

    h3 {
      font-size: 12px;
    }
    p {
      font-size: 10px;
    }
  }
  @media (width >= 1024px) {
    width: 270px;
    padding: 0 30px;
    gap: 37px;

    h3 {
      font-size: 16px;
    }
    && p {
      margin-top: 0px;
    }
  }
`;

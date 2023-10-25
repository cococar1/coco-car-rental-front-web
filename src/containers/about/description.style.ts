import styled from "styled-components";

export const SectionDescriptionContainer = styled.section`
  padding: 100px 0px;
  display: flex;
  justify-content: center;
  gap: 50px;
  div {
    img {
      width: 554px;
      height: 476px;
    }
  }
`;

export const ContainerTextDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 476px;
  justify-content: center;
  gap: 50px;
  div {
    p {
      color: #888888;
      font-size: 25px;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 30px;
    }
  }
`;

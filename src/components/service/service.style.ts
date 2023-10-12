import styled from "styled-components";

export const ContainerService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  height: 260px;
  max-height: 400px;
  padding: 25px 50px;
  /* padding-top: 40px; */
  /* padding-bottom: 0; */
  background: #fafafa;
  border-radius: 20px;
  text-align: center;
  text-align: center;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* padding-bottom: 0; */
  div {
    height: 60px;
    padding: 0;
    margin-top: 25px;
  }

  h3 {
    color: #333;
    font-size: 16px;
    font-weight: 400;
    padding: 0px 20px;
    padding-top: 0px;
  }
  p {
    font-size: 12px;
    color: var(--deshabilitado, #a8b0bb);
  }
`;

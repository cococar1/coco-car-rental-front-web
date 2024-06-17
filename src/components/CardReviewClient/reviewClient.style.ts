import styled from "styled-components";

export const ContainerCardReviewClient = styled.div`
  width: 380px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6.267px;
  box-shadow: 0px 1.56685px 7.83427px 0px rgba(0, 0, 0, 0.10);

  @media (width < 1022px) {
    max-width: 90%;
    min-width: 60%;
    flex-direction: column;
  }
`;

export const ElementCardReviewClient = styled.div`
  /* background-color: gold; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`;

export const ContainerImage = styled.div`
  width: 78.343px;
  height: 78.343px;
  
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 5px;
  
  background:#797F8C;
`;

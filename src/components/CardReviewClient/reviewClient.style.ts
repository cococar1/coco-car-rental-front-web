import styled from "styled-components";

export const ContainderCardReviewClient = styled.div`
  /* background-color: red; */
  width: 380px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6.267px;
  box-shadow: 0px 1.56685px 7.83427px 0px rgba(0, 0, 0, 0.10);
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
  background-color: yellow;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 5px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

import styled from "styled-components";

export const ContainerSectionContact = styled.section`
  display: grid;
  justify-content: space-evenly;

  align-items: center;
  margin-top: 20px;

  @media (width >= 1024px) {
    display: flex;
    height: 450px;
    padding: 150px 0px;
  }

  @media (width >= 1440px) {
    display: flex;
  }
`;

export const ContainerImageFinal = styled.div`
  position: relative;
  height: 60px;
  width: 110px;

  margin-top: 10px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
export const ContainerDescriptionContact = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  h2 {
    color: #e96f45;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 56px */
    text-align: left;
  }
  p {
    margin-top: 20px;

    font-size: 14px;
    color: #313e50;
  }
  @media (width >= 1024px) {
    margin: 0 0;

    h2 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 500px;
  background: #fafafa;
  border-radius: 20px;
  padding: 25px;
  button {
    margin-top: 20px;
  }
  div {
    margin-top: 20px;
  }
  textarea {
    width: 98%;
    height: 200px;
    min-height: 200px;
    max-height: 300px;
    max-width: 98%;
  }
`;

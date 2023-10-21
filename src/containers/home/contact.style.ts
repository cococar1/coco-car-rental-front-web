import styled from "styled-components";

export const ContainerSectionContact = styled.section`
  display: flex;
  justify-content: space-evenly;
  height: 450px;
  padding: 150px 0px;
  align-items: center;
`;

export const ContainerDescriptionContact = styled.div`
  width: 500px;
  /* background-color: red; */
  h2 {
    color: #e96f45;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 56px */
    text-align: left;
    width: 527px;
  }
  p {
    margin-top: 20px;
    width: 431px;
    font-size: 18px;
    color: #313e50;
  }
`;

export const ContainerForm = styled.div`
  width: 500px;
  /* height: 20px; */
  background: #fafafa;
  /* background-color: red; */
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

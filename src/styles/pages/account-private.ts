import styled from "styled-components";

export const GridPrivatePassword = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  margin-top: 10px;
  width: 90%;
  /* background-color: red; */
  gap: 30px;
`;

export const ContainerItemGrid = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  & label {
    display: block;
    padding: 10px; 
  }
`;
export const ContainerTitle = styled.div`
  padding: 10px 0px;
  & h1 {
    font-size: 40px;
  }

  & p {
    margin: 20px 0px;
    font-size: 20px;
  }

  & h2 {
    font-weight: bold;
  }
`;

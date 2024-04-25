import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 5px;

  div {
    display: flex;
    flex-direction: column;
    span {
      font-weight: bold;
    }
    p {
      padding: 5px 0px;
      color: #666276 ;
    }
  }
`;

export const ButtonEditable = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding:0;
`;

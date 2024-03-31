import styled from "styled-components";

export const ContainerSearchResult = styled.section`
  width: calc(100% - 300px);
  @media (max-width: 1024px) {
  background-color: #F7F7FA;
    width: calc(100% );

  }

`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  row-gap: 50px;

`;

export const TitleResult = styled.p`
  font-size: 16px;
  color: #a8b0bb;
  padding: 20px;
`;

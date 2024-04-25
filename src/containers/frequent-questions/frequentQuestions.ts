import styled from "styled-components";

export const ContainerSectionAccordions = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 150px;
  margin-top: 100px;
`;

export const ContainerColumn = styled.div`
  width: 25%;
  @media (width<=1024px) {
    & div {
      //containerAccordion
      width: 100%;
      & div {
        //detailsAccordion

        & p {
          width: 250px;
          text-align: start;
          padding: 10px;
        }
        & div {
          //summary
          padding: 10px 20px;
          & h3 {
            /* color: red; */
            width: 95%;
          }
          & div {
            //containerIconArrow
            width: 20px;
          }
        }
      }
    }
  }
`;

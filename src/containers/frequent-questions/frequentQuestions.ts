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
  /* background-color: red; */

  @media (width<=1024px) {
    /* background-color: red; */
    & div {
      //containerAccordion
      /* background-color: yellow; */
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
          /* background-color: green; */
          padding: 10px 20px;
          /* padding-right: 40px; */
          & h3 {
            /* color: red; */
            width: 95%;
          }
          & div {
            /* background-color: blue; */
            //containerIconArrow
            width: 20px;
          }
        }
      }
    }
  }
`;

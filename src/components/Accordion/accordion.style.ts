import styled from "styled-components";



export const ContainerAccordion = styled.div`
  position: relative;

  /* max-width: 474px; */
  width: 120%;
`;

export const DetailAccordion = styled.div`
  /* background-color: yellow; */
  width: 100%;
  margin-bottom: 1rem;
  /* max-width: 474px; */
  border-radius: 8px;
  position: relative;
`;

export const Summary = styled.div`
  list-style: none;
  color: #293340;
  padding: 1rem;
  padding-left: 0px;
  cursor: pointer;
  list-style: none;
  font-size: 20px;
  h3 {
    color: #293340;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
`;

export const ContainerContent = styled.p<{ open: boolean }>`
  margin-top: 10px;
  border-top: 1px solid #d8d8d8;
  color: #6d7783;
  font-size: 16px;
  line-height: 24px; /* 160% */
  display: ${({ open }) => (open ? "block" : "none")};
`;
export const ContainerIconArrow = styled.div<{ open: boolean }>`
  position: absolute;
  z-index: 100;
  top: ${({ open }) => (open ? "10px" : "20px")};
  right: 20px;
  cursor: pointer;
  transition: 0.3s;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
  /* transform: rotate(180deg); */
`;

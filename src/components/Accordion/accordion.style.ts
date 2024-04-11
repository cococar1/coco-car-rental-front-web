import styled from "styled-components";

// const rotateAnimation = keyframes
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// export const ContainerAccordion = styled.details`
//   width: 100%;
//   margin-bottom: 1rem;
//   max-width: 474px;
//   border-radius: 8px;
//   position: relative;

//   &[open] summary::before {
//     -webkit-animation: rotate 0.6s ease-in-out both;
//     animation: rotate-emoji 0.6s ease-in-out both;
//   }
//   summary {
//     /* background-color: red; */
//     color: #293340;

//     padding: 1rem;
//     cursor: pointer;
//     list-style: none;
//     font-size: 20px;
//     &:before {
//       position: absolute;
//       content: url('data:image/svg+xml;charset=utf8,%3Csvg width="15" height="7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 7"%3E%3Cg id="Group_5"%3E%3Cpath id="Stroke_3" d="M13.5 1L7.5 6L1.5 1" stroke="%23E96F45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /%3E%3C/g%3E%3C/svg%3E');
//       font-size: 1.75rem;
//       top: 10px;
//       right: 16px;
//     }
//   }
//   p {
//     border-top: 1px solid #d8d8d8;
//     color: #6d7783;
//     font-size: 16px;
//   }
// `;

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

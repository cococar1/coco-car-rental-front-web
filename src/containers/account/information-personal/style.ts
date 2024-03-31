import styled from "styled-components";

export const ContainerDataPersonal = styled.div`
  display: flex;
  gap: 20;

  @media (width < 1024px) {
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const SectionDataPersonal = styled.div`
  width: 80%;
`;

export const SectionImage = styled.div`
  width: 25%;

  & img {
    width: 200px;
  }
`;

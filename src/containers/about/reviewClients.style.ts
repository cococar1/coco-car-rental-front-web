import styled from "styled-components";

export const SectionReviewClientsContainer = styled.section`
  padding: 120px 0px;
  align-items: center;

  display: flex;
  flex-direction: column;
  gap: 40px;
  h2 {
    font-size: 38px;
  }
  text-align: center;
`;

export const ReviewClientText = styled.p`
  width: 698.034px;
  color: #797f8c;
  font-size: 15.669px;
  @media (width < 1022px) {
    width: 100%;
  }
`;

export const ReviewClientsContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;

  @media (width < 1022px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

import styled from "styled-components";

export const ContainerCarDetail = styled.div`
  display: flex;
  /* width: 80%; */
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 20px;
  justify-content: space-between;

  @media screen and (max-width: 1022px) {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
  }
`;
export const SectionImage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerImage = styled.div`
  width: 100%;

  img {
    width: 50%;
    position: relative !important;
  }
  @media screen and (max-width: 1022px) {
    img {
      width: 200% !important;
      position: relative !important;
    }
  }
`;
export const ContainerFeatures = styled.div`
  margin-top: 10px;
  width: 80%;
  h2 {
    padding: 10px 0px;
  }
`;

export const ContainerFeaturesElements = styled.div`
  width: 100%;
  max-height: 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SectionDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  /* background-color: yellow; */
  width: 40%;
  h1 {
    font-size: 33.565px;
    padding-top: 10px;
  }
  & > div {
    /* background-color: blue; */
    margin-top: 10px;
    h3 {
      padding: 10px 0px;
      font-size: 16px;
      color: #a7a7a7;
      font-weight: normal;
    }
  }
  @media screen and (max-width: 1022px) {
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const DetailCar = styled.div`
  margin-top:15px;
  display: flex;
  width: 70%;
  justify-content: space-between;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  width: 100%;

  @media screen and (max-width: 1022px) {
    width: 100%;
  }
`;

export const DetailBooking = styled.div`
  padding: 10px;
  border: 1px solid #e7e7e7;
  h2 {
    padding: 10px 0px;
  }
  h3 {
    color: #000 !important;
    font-weight: bold !important;
  }
`;

export const DetailPrice = styled.div`
  padding: 10px;
  border: 1px solid #e7e7e7;
  & > p {
    padding: 20px 0px;
  }
`;

export const ContainerPrice = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
`;

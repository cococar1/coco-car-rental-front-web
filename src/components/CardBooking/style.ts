import styled from "styled-components";

export const ContainerCardBooking = styled.div`
  display: flex;
  width: 700px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  -webkit-box-shadow: 3px 3px 21px -4px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 3px 3px 21px -4px rgba(0, 0, 0, 0.52);
  box-shadow: 3px 3px 21px -4px rgba(0, 0, 0, 0.52);

  @media (width < 1024px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContainerImage = styled.div`
  width: 300px;
  height: 100%;
  & img {
    position: relative !important;
    object-fit: cover !important;
    width: 100%;
    height: auto;
  }
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
`;

export const ButtonContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: 1px solid #efecf3;
  padding: 10px 0px 0px 0px;
  gap: 10px;
  & div {
    display: flex;
    gap: 4px;
    align-items: center;
  }
`;

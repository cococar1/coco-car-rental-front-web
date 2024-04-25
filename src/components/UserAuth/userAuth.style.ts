import styled from "styled-components";

export const ContainerUserAuth = styled.div`
  position: relative;
  display: flex;
  width: 18%;
  gap: 20px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerImageUser = styled.div`
  position: relative;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain !important;
  }
`;

export const ContainerInfoUser = styled.div`
  & h2 {
    font-weight: bold;
    font-size: 16px;
  }
  & a {
    cursor: pointer;
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 60px;
  background-color: #f2f2f2;
  /* height: 200px; */
  width: 310px;
  z-index: 100000;
  padding-bottom: 10px;
`;

export const TitleOptions = styled.div`
  background-color: #fff;
  border-radius: 10px 10px 0px 0px;
  padding: 13px;
  & p {
    /* font-weight: bold; */
    font-size: 18px;
  }
`;

export const ContainerOptionItem = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #000;
  &:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }
`;

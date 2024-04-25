import { colors, font } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerDetails = styled.div`
  text-align: center;
  padding: 20px;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h2 {
    margin-top: 10px;
    color: ${colors.titleBlack};
    font-weight: ${font.fontWeightTitle};
    font-size: 20px;
  }
  p {
    color: ${colors.secondaryBlack};
  }

  @media (width >= 1024px) {
    height: 700px;
    padding: 50px 0px;
    h2 {
      font-size: 30px;
    }
  }
`

export const ContainerDetailsContent = styled.div`
  display: grid;

  margin-top: 20px;
  @media (width >= 1024px) {
    display: flex;
  }
`
export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  gap: 64px;
  p {
    margin-top: 8px;
  }
`

export const DetailImageContent = styled.div`
  position: relative;

  align-items: center;
  .auto {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 0;
    left: 50%;
    transform: translate(-50%, 40%);
  }
  @media (width >= 1024px) {
    width: 400px;
    margin-top: 30px;
    .auto {
      transform: translate(-50%, -0%);
    }
  }
`

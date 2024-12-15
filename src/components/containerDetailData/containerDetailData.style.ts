import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerDetailDataElement = styled.div`
  display: flex;
/* background-color: ; */
  
  `
  export const ContainerIcon = styled.div`
  margin: 0px 10px;
  margin-top:12px
`

export const DetailDataElementText = styled.div`
  /* text-align: right; */
  width: 100%;
  max-width: 376px;
  font-size: 14px;
  h2 {
    font-size: 15px;
    color: ${colors.titleBlack};
  }
  p {
    color: ${colors.secondaryBlack};
  }

  @media (width >= 1024px) {
    h2 {
      font-size: 18px;
    }
  }
`

import { colors, font } from '@/styles/theme'
import styled from 'styled-components'

export const SecctionNewAutos = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  justify-content: center;
  align-items: center;

  text-align: center;
  h2 {
    margin-top: 10px;
    font-size: 20px;
    color: ${colors.titleBlack};
    font-weight: ${font.fontWeightTitle};
  }
  p {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
    color: ${colors.secondaryBlack};
  }

  @media (width >= 1024px) {
    padding: 50px;
    h2 {
      font-size: 30px;
    }
  }
`

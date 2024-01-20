import { font } from '@/styles/theme'
import styled from 'styled-components'

export const ContainerNewAutos = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 20px;
  h2 {
    font-weight: ${font.fontWeightTitle};
  }

  @media (width >= 728px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (width >= 1024px) {
    display: flex;
    justify-content: space-around;
  }
`

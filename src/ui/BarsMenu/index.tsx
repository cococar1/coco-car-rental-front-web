import { useScrollPosition } from '@/hooks/useScrollPosition'
import React from 'react'
import styled from 'styled-components'

interface BarsMenuProps {
  onChange: (value: boolean) => void
  $isActive?: boolean
}

export const BarsMenu = ({
  onChange,
  $isActive
}: BarsMenuProps): JSX.Element => {

  const scrollPosition = useScrollPosition() > 10;

  const handleActiveState = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked!)
  }

  return (
    <BarsUI $isActive={$isActive?? false} $scrollPosition={scrollPosition}>
    <input type='checkbox' onChange={handleActiveState} checked={$isActive} />
      <svg viewBox='0 0 32 32'>
        <path
          className='line line-top-bottom'
          d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
          stroke={scrollPosition ? 'black' : 'white'}        
          ></path>
        <path
          className='line'
          d='M7 16 27 16'
          stroke={scrollPosition ? 'black' : 'white'}
        ></path>
      </svg>
    </BarsUI>
  )
}

const BarsUI = styled.label<{ $isActive: boolean,$scrollPosition:boolean }>`
  cursor: pointer;
  input {
    display: none;
  }
  svg {
    height: 2em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: ${({ $isActive }) => ($isActive ? 'black' : 'white')};

  }
  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  input:checked + svg {
    transform: rotate(-45deg);
  }

  input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
  svg path{
    stroke: ${({ $scrollPosition }) => ($scrollPosition ? 'black !important' : 'white')};

  }
`

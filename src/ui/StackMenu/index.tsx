import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'

interface IStackMenu {
  href: string
  nameSection: string
}
export const StackMenu = ({
  href = '/',
  nameSection = 'Section'
}: IStackMenu): JSX.Element => {
  return (
    <StackContent>
      <Link href={href}>
        <LinkWrapper>
          <li>{nameSection}</li>
          <MdArrowForwardIos size={20} />
        </LinkWrapper>
      </Link>
    </StackContent>
  )
}

const StackContent = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    width: 100%;
    display: block;
    color: #000;
  }
  li {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
  }
`
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

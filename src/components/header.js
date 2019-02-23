import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 96px;
  background-color: #9cb4d2;
  color: #36454f;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 4px solid #8ca2bf;
`

const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
  padding: 24px;
  float: left;
`

const H2 = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  padding: 28px;
  float: right;
`

const Header = ({ timeZone }) => (
  <StyledHeader>
    <H1>Clocks</H1>
    <H2>{ timeZone }</H2>
  </StyledHeader>
)

Header.propTypes = {
  timeZone: string,
}

Header.defaultProps = {
  timeZone: '',
}

export default Header

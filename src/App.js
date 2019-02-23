import React, { Fragment, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Header from './components/header'
import Clock from './components/clock'
import TimeZoneSelector from './components/timeZoneSelector'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #cae1ff;
  }
`

const Container = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 0;
`

const App = () => {
  const initialTimeZone = 'Europe/London'
  const [timeZone, setTimeZone] = useState(initialTimeZone)
  return (
    <Fragment>
      <GlobalStyle />
      <Header 
        timeZone={timeZone}
      />
      <Container>
        <Clock
          timeZone={timeZone}
        />
        <TimeZoneSelector 
          timeZone={timeZone}
          setTimeZone={setTimeZone} 
        />
      </Container>
    </Fragment>
  )
}

export default App

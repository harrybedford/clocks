import React, { useState, useEffect } from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import duration from 'moment-timer'
import { string } from 'prop-types'
import styled from 'styled-components'

const StyledClock = styled.div`
  font-size: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 400px;
  height: 400px;
  border-radius: 100%;
  border: 4px solid #8ca2bf;
  background-color: #FFE8CA;
  box-sizing: border-box;
  padding: 160px 0;
  margin: 0 auto 80px;
  color: #36454f;
`

const Clock = ({ timeZone }) => {
  const getTime = () => moment().tz(timeZone).format('HH:mm:ss')
  const initialTime = getTime()
  const [time, setTime] = useState(initialTime)
  const tickTock = () => setTime(getTime())
  const timer = new moment.duration(1000).timer(tickTock)
  useEffect(() => {
    timer.stop()
    timer.start()
  })
  return (
    <StyledClock>
      { time }
    </StyledClock>
  )
}

Clock.propTypes = {
  timeZone: string.isRequired,
}


export default Clock
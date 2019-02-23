import React from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import timeZones from '../timezones'

const StyledSelect = styled.select`
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 4px;
`

const TimeZoneSelector = ({setTimeZone, timeZone}) => (
  <StyledSelect 
    value={timeZone}
    onChange={ e => setTimeZone(e.target.value) }
  >
    {
      timeZones.map((timeZone, index) => (
        <option key={index} value={timeZone}>
          { timeZone }
        </option>
      ))
    }
  </StyledSelect>
)

TimeZoneSelector.propTypes = {
  setTimeZone: func.isRequired,
  timeZone: string.isRequired,
}

export default TimeZoneSelector

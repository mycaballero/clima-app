import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDaySunny, WiRain, WiMoonFull, WiThunderstorm } from 'react-icons/wi'

export const validValuesOfState = ["cloud","sunny","rain","moon","storm"] // valores para verificar

const stateByName = {
    cloud: WiCloud,
    sunny: WiDaySunny,
    rain: WiRain,
    moon: WiMoonFull,
    strom: WiThunderstorm
}

const IconState = ({state}) => {
    const StateByName = stateByName[state]
    return (
        <StateByName></StateByName>
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValuesOfState).isRequired,
}

export default IconState

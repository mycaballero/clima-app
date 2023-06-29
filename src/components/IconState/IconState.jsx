import React from 'react'
import PropTypes from 'prop-types'
import { WiCloud, WiDaySunny, WiRain, WiMoonFull, WiThunderstorm, WiSnow } from 'react-icons/wi'

export const validValuesOfState = ["clouds", "drizzle","rain","moon","thunderstorm","clear", "snow"] // valores para verificar

const stateByName = {
    clouds: WiCloud,
    clear: WiDaySunny,
    drizzle: WiRain,
    rain: WiRain,
    moon: WiMoonFull,
    thunderstorm: WiThunderstorm,
    snow: WiSnow,
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

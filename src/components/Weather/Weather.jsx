import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { WiCloud, WiDaySunny, WiRain, WiMoonFull, WiThunderstorm } from 'react-icons/wi'
import { IconContext } from 'react-icons'


const validValuesOfState = ["cloud","sunny","rain","moon","storm"] // valores para verificar

const stateByName = {
    cloud: WiCloud,
    sunny: WiDaySunny,
    rain: WiRain,
    moon: WiMoonFull,
    strom: WiThunderstorm
}
//funcion renderizadora
const renderState = state => {
    /*switch (state) {
        case "cloud":{
            const Icon = stateByName["cloud"]
            return <Icon/>
        }
        case "sunny":{
            const Icon = stateByName["sunny"]
            return <Icon/>
        }
        case "rain":{
            const Icon = stateByName["rain"] 
            return <Icon/>
        }
        case "moon":{
            const Icon = stateByName["moon"]
            return <Icon/>
        }  
        case "storm":{
            const Icon = stateByName["storm"]
            return <Icon/>
        }
        default:{
            const Icon = stateByName["sunny"]
            return <Icon/>
        }
    }*/

    // mejora de codigo
    let Icon = stateByName[state]
    return <Icon/>
    
}
const Weather = ({ temperature, state }) => { 
    return (
        <div>
            <IconContext.Provider value={{size:'4.9em'}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display='inline' variant='h2'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.oneOf(validValuesOfState).isRequired
}

export default Weather

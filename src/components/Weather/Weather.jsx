import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { IconContext } from 'react-icons'
import IconState,{ validValuesOfState } from './../IconState'

const Weather = ({ temperature, state }) => { 
    return (
        <div>
            <IconContext.Provider value={{size:'4.9em'}}>
                <IconState state={state}></IconState>
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

import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { IconContext } from 'react-icons'
import IconState,{ validValuesOfState } from './../IconState'

const Weather = ({ temperature, state }) => { 
    return (
        <Grid container item
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <IconContext.Provider value={{size:'4.9em'}}>
                {
                    state
                    ? <IconState state={state}/>
                    : <Skeleton variant='circle' width={80} height={80}/>
                }
            </IconContext.Provider>
            {
                temperature
                ? <Typography display='inline' variant='h2'>{temperature}</Typography>
                : <Skeleton variant='rect' width={80} height={80}/>
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValuesOfState)
}

export default Weather

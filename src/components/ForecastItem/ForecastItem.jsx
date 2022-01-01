import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import IconState, { validValuesOfState } from '../IconState'
import { IconContext } from 'react-icons/lib'


const ForecastItem = ({ weekDay, hour, state, temperature }) => {
    return (
        <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>
            <Grid item>
                <IconContext.Provider value={{size:'4.9em'}}>
                    <IconState state={state}></IconState>
                </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{temperature}°</Typography>
            </Grid>
        </Grid>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired, 
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValuesOfState).isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem

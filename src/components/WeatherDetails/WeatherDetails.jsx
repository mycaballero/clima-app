import React from 'react'
import PropTypes from 'prop-types'
import { Grid,Typography } from '@material-ui/core'

const WeatherDetails = ({humidity,wind}) => {
    return (
        <Grid container>
            <Grid item xs={12} align='center'>
                <Typography>Humedad: {humidity}%</Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <Typography>Viento: {wind}km/h</Typography>
            </Grid>
        </Grid>
    )
}

WeatherDetails.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
}

export default WeatherDetails


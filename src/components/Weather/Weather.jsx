import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Weather = ({ temperature }) => {
    return (
        <div>
            <Typography variant='h2'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.string.isRequired
}

export default Weather

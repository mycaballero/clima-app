import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import ForecastItem from '../ForecastItem'
import { validValuesOfState} from '../IconState'

const renderForecastItem = forecast => {
    const { weekDay, hour, state, temperature } = forecast
    // poner el idetificador Key
    return (
        <Grid data-testid="forecast-item-container" item key={`${weekDay}${hour}`}>
            <ForecastItem 
            weekDay={weekDay}
            hour={hour}
            state={state}
            temperature={temperature}
            >

            </ForecastItem>
        </Grid>
    )
}

const Forecast = ({ forecastItemList }) => {
    return (
        <Grid container
            justifyContent="center"
            alignItems="center">
                {
                    forecastItemList.map(forecast => renderForecastItem(forecast))
                }
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.arrayOf(validValuesOfState).isRequired,
        temperature: PropTypes.number.isRequired
    }))
}

export default Forecast

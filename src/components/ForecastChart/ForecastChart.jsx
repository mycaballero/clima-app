import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { LineChart, Line, CartesianGrid, XAxis,YAxis, Tooltip, Legend } from 'recharts' // recharts es super util

const ForecastChart = ({ data }) => {
    return (
        <>
            <Grid data-testid="forecast-char-item"
                >
                <LineChart 
                height={250}
                width={700}
                margin={{ top: 20, botton: 20, left: 5, right: 5 }}
                data={data}>
                    <XAxis dataKey="dayHour"></XAxis>
                    <YAxis></YAxis>
                    <CartesianGrid></CartesianGrid>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type="monotone" stroke='#FF0000' dataKey="min"></Line>
                    <Line type="monotone" stroke='#0000FF' dataKey="max"></Line>
                </LineChart>
            </Grid>
        </>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        }),
    ).isRequired,
}

export default ForecastChart

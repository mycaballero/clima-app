import React from 'react'
import Forecast from './Forecast'

export default {
    title: "Forecast",
    component: Forecast
}

const ForecastExamples = [
    {weekDay: "Lunes", hour: 6, state: "sunny", temperature: 10},
    {weekDay: "Martes", hour: 7, state: "rain", temperature: 12},
    {weekDay: "Miercoles", hour: 8, state: "moon", temperature: 15},
] 

const ForecastComponent = () => (<Forecast forecastItemList={ForecastExamples} ></Forecast>)
export const ForecastEx = ForecastComponent
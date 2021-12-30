import React from 'react'
import 'typeface-roboto'
import WeatherDetails from './WeatherDetails'


export default {
    title: "WeatherDetails",
    component: WeatherDetails
}
const humidity = 80
const wind = 10
const WeatherDetailsExample = () => {
    
    return <WeatherDetails humidity={humidity} wind={wind} ></WeatherDetails>
}

export const WeatherDetailsExampleExport = WeatherDetailsExample
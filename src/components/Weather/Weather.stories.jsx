import React from 'react'
import "typeface-roboto"
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}
const WeatherTemp = () => (<Weather temperature={"10"} state={"clear"}></Weather>)
export const temp = WeatherTemp
const WeatherCloud = () => (<Weather temperature={"10"} state={"clouds"}></Weather>)
export const Cloud = WeatherCloud
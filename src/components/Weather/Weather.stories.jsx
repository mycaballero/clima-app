import React from 'react'
import "typeface-roboto"
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}
const WeatherTemp = () => (<Weather temperature={"10"} state={"sunny"}></Weather>)
export const temp = WeatherTemp
const WeatherCloud = () => (<Weather temperature={"10"} state={"cloud"}></Weather>)
export const Cloud = WeatherCloud
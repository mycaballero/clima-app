import React from 'react'
import "typeface-roboto"
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}
const WeatherTemp = () => (<Weather temperature={"10"}></Weather>)
export const temp = WeatherTemp
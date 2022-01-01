import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem
}

const weekDay = "Lunes"
const hour = 8
const state = "sunny"
const temperature = 10


export const lunesSoleado = () => (<ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature}></ForecastItem>)

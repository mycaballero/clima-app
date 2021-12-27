import React from 'react'
import 'typeface-roboto'
import CityInfo from './CityInfo'

export default {
    title: "CityInfo",
    component: CityInfo
}

const cityCartagena = () => (<CityInfo city={"Cartagena"} country={"Colombia"}></CityInfo>)


export const cartagena = cityCartagena
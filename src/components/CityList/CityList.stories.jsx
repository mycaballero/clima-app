import React from 'react'
import 'typeface-roboto'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}
const cityAndCountry = [
    {city:"Cartagena",country:"Colombia"},
    {city:"Bogotá",country:"Colombia"},
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Ciudad de México",country:"Mexico"},
    {city:"Sao Paulo",country:"Brasil"},
]

const cityListExample = () => (<CityList cities={cityAndCountry} ></CityList>)

export const ListEx = cityListExample
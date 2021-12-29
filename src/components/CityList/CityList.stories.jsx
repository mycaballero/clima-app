import React from 'react'
import 'typeface-roboto'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}
const cityAndCountry = [
    {city:"paa",country:"sasas"},
    {city:"pae",country:"sasas"},
    {city:"pai",country:"sasas"},
    {city:"pao",country:"sasas"},
    {city:"pau",country:"sasas"},
]

const cityListExample = () => (<CityList cities={cityAndCountry} ></CityList>)

export const ListEx = cityListExample
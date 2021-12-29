/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'

test("CityList render", async() => {
    //Arrange
    const cities = [
        {city:"Cartagena",country:"Colombia"},
        {city:"Bogotá",country:"Colombia"},
        {city:"Buenos Aires",country:"Argentina"},
        {city:"Ciudad de México",country:"Mexico"},
        {city:"Sao Paulo",country:"Brasil"},
    ] 
    
    // Act
    const { findAllByRole } = render(<CityList cities={cities}></CityList>)
    
    const item = await findAllByRole("listitem")

    // assert
    expect(item).toHaveLength(cities.length)
    console.log("numero de ciudades",cities.length)

} )
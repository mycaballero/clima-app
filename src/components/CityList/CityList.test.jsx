/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'

test("CityList render", async() => {
    //Arrange
    const cities = [
        {city:"paa",country:"sasas"},
        {city:"pae",country:"sasas"},
        {city:"pai",country:"sasas"},
        {city:"pao",country:"sasas"},
        {city:"pau",country:"sasas"},
    ] 
    
    // Act
    const { findAllByRole } = render(<CityList cities={cities}></CityList>)
    
    const item = await findAllByRole("listitem")

    // assert
    expect(item).toHaveLength(cities.length)
    console.log("numero de ciudades",cities.length)

} )
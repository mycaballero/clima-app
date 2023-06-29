/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city:"Cartagena", country:"Colombia", lng: -74.7813, lat: 10.9685},
    {city:"Bogotá", country:"Colombia", lng: -74.08175, lat: 4.60971},
    {city:"Buenos Aires", country:"Argentina", lng: -58.37723, lat:  -34.61315},
    {city:"Ciudad de México", country:"Mexico", lng: -99.12766, lat: 19.42847},
    {city:"Sao Paulo", country:"Brasil", lng: -46.63611, lat: -23.5475},
] 


test("CityList render", async() => {
    //Arrange
    // Act
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}}></CityList>)
    
    const item = await findAllByRole("button")

    // assert
    expect(item).toHaveLength(cities.length)
    console.log("numero de ciudades",cities.length)

})

// testeamos la funcionalidad primero
test("CityList CLick on item", async () => {
    // simular la acción de un boton: Click sobre un item
    // para eso usamos la función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}></CityList>)

    const items = await findAllByRole("button")

    // Para simular acción se utiliza *fireEvent* es parte de la libreria de @testing-library/react

    fireEvent.click(items[0])
    // se debe llamar a la función  fnClickOnItem
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
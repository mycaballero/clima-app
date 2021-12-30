/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city:"Cartagena",country:"Colombia"},
    {city:"Bogotá",country:"Colombia"},
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Ciudad de México",country:"Mexico"},
    {city:"Sao Paulo",country:"Brasil"},
] 


test("CityList render", async() => {
    //Arrange
    // Act
    const { findAllByRole } = render(<CityList cities={cities}></CityList>)
    
    const item = await findAllByRole("listitem")

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

    const items = await findAllByRole("listitem")

    // Para simular acción se utiliza *fireEvent* es parte de la libreria de @testing-library/react

    fireEvent.click(items[0])
    // se debe llamar a la función  fnClickOnItem
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
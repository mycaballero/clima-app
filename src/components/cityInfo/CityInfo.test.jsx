
import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: subject under testing (objeto del testeo)

test("CityInfo render",async () =>{
 // AAA 
// Arrange-> todo lo que necesita el test 
// Act -> hacer el test 
const city = "Cartagena"
const country = "Colombia"
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
// Assert -> revisar que el test funcionó
    // buscar todos los componentes que sean cabecera (h1,h2,..)
    
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityAndCountryComponent = await findAllByRole("heading")//aunque muestra error funciona bien
    // ¿Cuando es correcto el test?
    // Definicion
    /*
        Cuando el primere elemento (Heading) se encyuentre en "Cartagena" y cunado el segundo se encuente en "Colombia"
    */
    expect(cityAndCountryComponent[0]).toHaveTextContent(city)
    expect(cityAndCountryComponent[1]).toHaveTextContent(country)
})
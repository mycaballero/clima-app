/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails'

// findByText: Encuenta un componente por el texto que muestra
test('WhetherDetails render', async () => {
    const { findByText } = render(<WeatherDetails humidity={80} wind={10}></WeatherDetails>)

    //utilizamos expresiones regulares para encontrar el texto
    const humidity = await findByText(/80/)
    const wind = await findByText(/10/)

    
    expect(humidity).toHaveTextContent("Humedad: 80%")
    expect(wind).toHaveTextContent("Viento: 10km/h")
})

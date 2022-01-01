/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'


test('ForeCastItem render', async () => {
    const camps = {
        weekDay: "lunes",
        temperature: 10,
        hour: 10
    }
    // testear los strings
    const { findByText } = render(<ForecastItem weekDay={camps.weekDay} state={'sunny'} temperature={camps.temperature} hour={camps.hour}></ForecastItem>)
        
    const ForecastComponentDay = await findByText("lunes")
    const ForecastComponentTemp = await findByText(10)
    const ForecastComponentHour = await findByText(10)

    expect(ForecastComponentDay).toHaveTextContent(camps.weekDay)
    expect(ForecastComponentTemp).toHaveTextContent(camps.temperature)
    expect(ForecastComponentHour).toHaveTextContent(camps.hour)

    
})


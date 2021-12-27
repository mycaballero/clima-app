import React from 'react'
import { render } from '@testing-library/react'
import Weather from './Weather' // SUT: subject under testing (objeto del testeo)

test( "Weather render", async () =>{
    const temperature = "10"

    const { findByRole } = render(<Weather temperature={temperature}></Weather>)

    const temperatureComponent = await findByRole("heading")

    expect(temperatureComponent).toHaveTextContent(temperature)
})

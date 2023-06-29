/* eslint-disable testing-library/prefer-screen-queries */

import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const ForecastExamples = [
    {weekDay: "Lunes", hour: 6, state: "clear", temperature: 10},
    {weekDay: "Martes", hour: 7, state: "rain", temperature: 12},
    {weekDay: "Miercoles", hour: 8, state: "snow", temperature: 15},
] 
test( 'Forecast render', async () => {
    const { findAllByTestId } = render(<Forecast forecastItemList={ForecastExamples}></Forecast>)
    const forecastItems = await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(3)
})
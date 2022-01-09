/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import React from 'react'
import ForecastChart from './ForecastChart'

test('ForecastChar render', async () => {
    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        },
        {
            "dayHour": "Vie 12",
            "min": 18,
            "max": 28,
        },
        {
            "dayHour": "Vie 18",
            "min": 18,
            "max": 25,
        },
        {
            "dayHour": "Sab 06",
            "min": 15,
            "max": 22,
        },
        {
            "dayHour": "Sab 12",
            "min": 12,
            "max": 19,
        }
    ]
    
    const { findAllByText } = render(<ForecastChart data={data}></ForecastChart>) 

    //const findedComponentForecast = await findAllByText(/([A-Z]{0,3} {1}[1-9]{0,2})/i)
    
    //expect(findedComponentForecast).toHaveLength(6)
    
    
})
import React from 'react'
import { Grid } from '@material-ui/core'
import CityInfo from '../components/CityInfo'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
const CityPage = () => {
    const city = "Cartagena"
    const country = "Colombia"
    const temperature = 20
    const state = "clear"
    const humidity = 80
    const wind = 10
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
    const ForecastExamples = [
        {weekDay: "Lunes", hour: 6, state: "clear", temperature: 10},
        {weekDay: "Martes", hour: 7, state: "drizzle", temperature: 12},
        {weekDay: "Miércoles", hour: 8, state: "clouds", temperature: 15},
        {weekDay: "Jueves", hour: 4, state: "thunderstorm", temperature: 11},
        {weekDay: "Viernes", hour: 12, state: "drizzle", temperature: 22},
        {weekDay: "Sábado", hour: 3, state: "clouds", temperature: 13},
    ] 
    return (
        <Grid container
            justifyContent='space-around'
            direction='column'
            spacing={2}>
            <Grid container item
                xs={12}
                justifyContent='center'
                alignItems='flex-end'>
                <CityInfo city={city} country={country}></CityInfo>
            </Grid>
            <Grid container item xs={12} 
                alignItems='flex-end'>
                <Grid container item xs={6}
                    alignItems='center'>
                    <Weather temperature={temperature} state={state}></Weather>
                </Grid>
                <Grid item xs={6}>
                    <WeatherDetails humidity={humidity} wind={wind}></WeatherDetails>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ForecastChart data={data}></ForecastChart>
            </Grid>
            <Grid item>
                <Forecast forecastItemList={ForecastExamples}></Forecast>
            </Grid>
        </Grid>
    )
}
export default CityPage

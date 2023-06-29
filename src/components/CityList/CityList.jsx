import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Grid }  from '@material-ui/core/' // sistema de grillas funciona como el de Bootstrap
import { Alert } from '@material-ui/lab'
import CityInfo from '../CityInfo'
import Weather from './../Weather'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// define el nombre de la ciudad-pais
const getCityCode = (city, country) => `${city}-${country}`

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventonClickCity => (cityAndCountry, weather) => {
    const {city, country } = cityAndCountry
    return (
        <ListItem 
            button
            key={getCityCode(city, country).toString()} onClick={eventonClickCity}
            alignItems='center'>
            <Grid container
                justifyContent='center'
                alignItems='center'>
                <Grid item
                    sm={8}
                    xs={12}
                >
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid item
                    sm={4}
                    xs={12}>
                        <Weather temperature={weather && weather.temperature} state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}
// cities es un aray, cada item va a tener ciudad y pais
const CityList = ({cities, onClickCity}) => {
    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)
    const OPEN_WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const OPEN_WEATHER_API_KEY = 'a203c80603ee19fc342c99486424d729'
    useEffect(() => {
        const setWeather = async (city, country, lng, lat) => {
            const url = `${OPEN_WEATHER_API_URL}?lat=${lat}&lon=${lng}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
            try {
                const response = await axios.get(url)
                const { data } = response
                const temperature = Number(data.main.temp.toFixed(0))
                const state = data.weather[0].main.toLowerCase()
                const propName = getCityCode(city, country) // ejemplo:  [cartagena-colombia]
                const propValue = { temperature, state } // ejemplo: {temperature: 10, state: "clear"}
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))
            } catch (error) {
                if (error.response) { // Error de que no responde el server
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) { // Error de que no llega la petición al servidor
                    setError("Verifique la conexión a internet")
                } else { // Error inusuales
                    setError("Error al cargar los datos del servidor")
                }
            }
        }
        cities.forEach(({city, country, lng, lat}) => {
            return setWeather(city, country, lng, lat)
        })
    }, [cities])
    
    return (
        <div>
            {
                error && <Alert severity="error" onClose={() => setError(null)}>{error}</Alert>
            }
            <List>
            {
                cities.map(
                    cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                        allWeather[getCityCode(cityAndCountry.city, cityAndCountry.country)]
                    )
                )
            }
        </List>

        </div>
    )
}
CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        lng: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
    })).isRequired, // es un array de objetos
    onClickCity: PropTypes.func.isRequired
}

export default CityList

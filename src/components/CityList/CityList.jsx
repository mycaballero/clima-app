import React from 'react'
import PropTypes from 'prop-types'
import  { Grid }  from '@material-ui/core/' // sistema de grillas funciona como el de Bootstrap
import CityInfo from './../cityInfo'
import Weather from './../Weather'


// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventonClickCity => cityAndCountry => {
    const {city, country } = cityAndCountry

    return (
        <li key={city.toString()} onClick={eventonClickCity}>
            <Grid container
                justifyContent='center'
                alignItems='center'
            >
                <Grid item
                    sm={8}
                    xs={12}
                >
                    <CityInfo city={city} country={country}></CityInfo>
                </Grid>
                <Grid item
                    sm={4}
                    xs={12}
                >
                    <Weather temperature={"10"} state="sunny"></Weather>
                </Grid>
            </Grid>

            
        </li>
    )
}
// cities es un aray, cada item va a tener ciudad y pais
const CityList = ({cities, onClickCity}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }

        </ul>
    )
}
// mejorar estavalidación
CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })),
    onClickCity: PropTypes.func
}

export default CityList

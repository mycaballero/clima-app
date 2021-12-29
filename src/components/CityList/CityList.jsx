import React from 'react'
import PropTypes from 'prop-types'
import  { Grid }  from '@material-ui/core/' // sistema de grillas funciona como el de Bootstrap
import CityInfo from './../cityInfo'
import Weather from './../Weather'

const renderCityAndCountry = cityAndCountry => {
    const {city, country } = cityAndCountry

    return (
        <li key={city.toString()}>
            <Grid container
                justify='center'
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
const CityList = ({cities}) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }

        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired
}

export default CityList

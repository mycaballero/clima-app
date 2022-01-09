import React from 'react'
import PropTypes from 'prop-types'
import  { Grid }  from '@material-ui/core/' // sistema de grillas funciona como el de Bootstrap
import CityInfo from '../CityInfo'
import Weather from './../Weather'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventonClickCity => cityAndCountry => {
    const {city, country } = cityAndCountry

    return (
        <ListItem 
            button
            key={city.toString()} onClick={eventonClickCity}
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
                    <Weather temperature={"10"} state="sunny"></Weather>
                </Grid>
            </Grid>
        </ListItem>
    )
}
// cities es un aray, cada item va a tener ciudad y pais
const CityList = ({cities, onClickCity}) => {
    return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }

        </List>
    )
}
// mejorar estavalidación
CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })),
    onClickCity: PropTypes.func.isRequired
}

export default CityList

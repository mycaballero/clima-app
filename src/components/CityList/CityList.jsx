import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from './../cityInfo'
import Weather from './../Weather'

const renderCityAndCountry = cityAndCountry => {
    const {city, country } = cityAndCountry

    return (
        <li key={city.toString()}>
            <CityInfo city={city} country={country}></CityInfo>
            <Weather temperature={"10"} state="sunny"></Weather>
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

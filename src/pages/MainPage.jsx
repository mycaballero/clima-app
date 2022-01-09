import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

const cityAndCountry = [
    {city:"Cartagena",country:"Colombia"},
    {city:"Bogotá",country:"Colombia"},
    {city:"Buenos Aires",country:"Argentina"},
    {city:"Ciudad de México",country:"Mexico"},
    {city:"Sao Paulo",country:"Brasil"},
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        // .push permite cambiar la URL por programamción
        history.push("/city")
    }

    return (
        <div>
            <h2>Lista de ciudades</h2>
            <CityList 
                cities={cityAndCountry} 
                onClickCity={onClickHandler}
                >
            </CityList>
        </div>
    )
}


export default MainPage

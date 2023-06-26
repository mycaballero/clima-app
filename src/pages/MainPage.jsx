import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import CityList from './../components/CityList'
import { Grid, Typography } from '@material-ui/core'

const cityAndCountry = [
    {city:"Cartagena",country:"Colombia", lng: -74.7813, lat: 10.9685},
    {city:"Bogotá",country:"Colombia", lng: 4.60971, lat: -74.08175},
    {city:"Buenos Aires",country:"Argentina", lng: -34.61315, lat: -58.37723},
    {city:"Ciudad de México",country:"Mexico", lng: 19.42847, lat: -99.12766},
    {city:"Sao Paulo",country:"Brasil", lng: -23.5475, lat: -46.63611},
]

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = () => {
        // .push permite cambiar la URL por programamción
        history.push("/city")
    }

    return (
        <div>
            <Grid container
            alignItems='center'
            spacing={2}
            className='w-full bg-blue-800 px-3 py-2 shadow-xl text-white'
            >
                <Grid item>
                <IconContext.Provider value={{size: '4em'}}>
                    <WiDaySunny />
                </IconContext.Provider>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>
                        ClimaApp
                    </Typography>
                </Grid>
            </Grid>
            <Grid className='m-auto md:w-10/12 lg:w-8/12 shadow-lg'>
                <CityList 
                    cities={cityAndCountry} 
                    onClickCity={onClickHandler}
                    >
                </CityList>
            </Grid>
        </div>
    )
}


export default MainPage

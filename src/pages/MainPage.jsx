import React from 'react'
import { useHistory } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import CityList from './../components/CityList'
import { Grid, Typography } from '@material-ui/core'

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

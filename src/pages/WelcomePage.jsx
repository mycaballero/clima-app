import React from 'react'
import WelcomeScreen from '../components/WelcomeScreen'
import { Grid, Link, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'

const WelcomePage = () => {
    return (
        <div>
            <WelcomeScreen>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    className='w-full h-screen'
                >
                    <div 
                    className='flex w-full h-44 items-center justify-center bg-white/10 |
                    text-blue-950 hover:bg-white/50 hover:shadow-lg hover:shadow-white/20 ease-in-out duration-1000'>
                        <Grid item container xs={12}
                        justifyContent="center"
                        alignItems="center"
                        >
                            <Grid item>
                                <Grid item className='flex justify-center'>
                                    <IconContext.Provider value={{size: '6em'}}>
                                        <WiDaySunny />
                                    </IconContext.Provider>
                                </Grid>
                                <Grid item className='cursor-default'>
                                    <Typography variant='h4' color='inherit'>
                                        ClimApp
                                    </Typography>
                                </Grid>
                                <Link className='flex justify-center' color="inherit" aria-label="menu" component={RouterLink} to="/main">
                                    Ingresar
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </WelcomeScreen>
        </div>
    )
}

export default WelcomePage

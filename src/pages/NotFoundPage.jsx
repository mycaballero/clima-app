import React from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import { WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='bg-blue-100'>
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
                                        <WiRain />
                                    </IconContext.Provider>
                                </Grid>
                                <Grid item className='cursor-default'>
                                    <Typography variant='h4' color='inherit'>
                                        404 | La página no existe
                                    </Typography>
                                </Grid>
                                <Link className='flex justify-center' 
                                color="inherit" 
                                aria-label="menu" 
                                component={RouterLink} 
                                to="/main">
                                    Volver al inicio
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    
                </Grid>
        </div>
    )
}


export default NotFoundPage

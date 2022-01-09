import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    return (
        <Grid container
            justifyContent='center'
            direction='row'>
            <Grid item
                xs={12}
                sm={11}
                md={10}
                lg={8}>
                <Router>
                    <Switch>
                        <Route exact path="/"> 
                            <WelcomePage></WelcomePage>
                        </Route>
                        <Route path="/main">
                            <MainPage></MainPage>
                        </Route>
                        <Route path="/city">
                            <CityPage></CityPage>
                        </Route>
                        <Route>
                            <NotFoundPage></NotFoundPage>
                        </Route>
                    </Switch>
                </Router>
            </Grid>
        </Grid>
    )
}

export default App

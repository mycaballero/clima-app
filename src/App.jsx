import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    return (
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
    )
}

export default App

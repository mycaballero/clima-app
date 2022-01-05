import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

const App = () => {
    return (
        <div>
            <h1>App</h1>
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
        </div>
    )
}

export default App

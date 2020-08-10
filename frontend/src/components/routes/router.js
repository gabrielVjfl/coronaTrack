import React from 'react'

import App from '../../App'

import CovidWorld from '../World'

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'

const Rotas = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/world" exact component={CovidWorld}></Route>
                <Redirect to="*" from="/"/>
            </Switch>
        </Router>
    )
}
export default Rotas
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Register } from '../components/Register'
import { Update } from '../components/Update'


function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Register/>
                </Route>
                <Route exact path="/update">
                    <Update/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;
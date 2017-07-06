import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import Other from './components/Other/Other'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/other' component={Other} />
    <Route component={NotFound} />
  </Switch>
    )

export default Routes

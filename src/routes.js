import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import CreateAuthor from './components/Author/CreateAuthor'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/createAuthor' component={CreateAuthor} />
    <Route component={NotFound} />
  </Switch>
    )

export default Routes

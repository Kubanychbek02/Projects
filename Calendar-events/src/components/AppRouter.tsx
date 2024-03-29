import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { useTypeSelector } from '../hooks/UseTypeSelector'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'

export const AppRouter = () => {
    const {isAuth} = useTypeSelector(state => state.auth)
    console.log(isAuth);
    
  return (
    isAuth ? 
        <Switch>
            {privateRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />)}
            <Redirect to={RouteNames.EVENT}/>
        </Switch>
        :
        <>
        <Switch>
            {publicRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />)}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>
        </>
  )
}

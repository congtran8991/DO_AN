import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { routers } from './routers';
import Header from './header';
import Login from '../components/login';
//import PrivateRoute from './privateRouter'
class Router extends Component {
    showContentMenus = (routes) => {
        let result = routes.map((router, index) => {
            console.log(router);
            return (
                <Route
                    key={index}
                    exact={router.exact}
                    path={router.path}>
                    {router.main}
                </Route>
            )
        })
        return <Switch>{result}</Switch>;
    }
    render() {
        return (
            <BrowserRouter>
               <Header/>
               <Switch>{this.showContentMenus(routers)}</Switch>      
            </BrowserRouter>
        )
    }
}
export default Router;
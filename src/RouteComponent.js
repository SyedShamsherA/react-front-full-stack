import React from 'react';
import LoginComponent from './LoginComponent';
import ProductComponent from './ProductComponent';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function HomeComponent(props) {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LoginComponent}></Route>
                        <Route exact path="/product" component={ProductComponent}></Route> 
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}

export default HomeComponent;
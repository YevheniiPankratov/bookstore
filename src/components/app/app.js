import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router';
import HomePage from '../pages/homePage';
import CartPage from '../pages/cartPage';

const App = () => {
    return ( 
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
    );
}

export default App;
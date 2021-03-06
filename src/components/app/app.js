import React from 'react';
import './app.css';
import { Switch, Route } from 'react-router';
import HomePage from '../pages/homePage';
import CartPage from '../pages/cartPage';
import StoreHeader from '../storeHeader/storeHeader'

const App = () => {
    return ( 
            <main role='main' className='container'>
            <StoreHeader/>
                <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
            </main>
    );
}

export default App;
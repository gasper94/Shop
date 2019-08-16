import React from 'react';

import { Switch, Route} from "react-router-dom";

// Components
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop.jsx'

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

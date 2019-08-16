import React from 'react';

import { Switch, Route} from "react-router-dom";

// Components
import HomePage from './Pages/homepage/homepage.jsx';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/header/header.jsx';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;

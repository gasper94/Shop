import React from 'react';

import { Switch, Route} from "react-router-dom";

// Components
import HomePage from './Pages/homepage/homepage.jsx';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/header/header.jsx';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out';

// Firebase
import {auth} from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  // Sign in Process with Firebase Starts HERE
  unsubscribeFromAuth = null;

  componentDidMount() {
    // Open subscription: connection with the firebase server. (must be closed for memory leaks)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  // Will unmount one way subscription
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  // Sign in Process with Firebase Ends HERE
  

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;

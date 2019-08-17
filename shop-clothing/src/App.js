import React from 'react';

import { Switch, Route} from "react-router-dom";

// Components
import HomePage from './Pages/homepage/homepage.jsx';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/header/header.jsx';
import SignInAndSignOut from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';

// Firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }else{
        this.setState({currentUser: userAuth});
      }

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

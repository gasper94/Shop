import React from 'react';
import { Switch, Route} from "react-router-dom";

// Components
import HomePage from './Pages/homepage/homepage.jsx';
import ShopPage from './Pages/shop/shop.jsx';
import Header from './Components/header/header.jsx';
import SignInAndSignOut from './Pages/sign-in-and-sign-up/sign-in-and-sign-up';

// Firebase
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

// Style Sheet
import './App.css';

// Redux
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {

  // Sign in Process with Firebase Starts HERE
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    // Open subscription: connection with the firebase server. (must be closed for memory leaks)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });

      }else{
        setCurrentUser(userAuth);
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
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null, mapDispatchToProps)(App);

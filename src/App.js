import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {auth} from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {login, logout, selectUser} from './features/features/userSlice';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        // user logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        // user logged out
        dispatch(logout());
      }
    });
    return unsubscribe;

  },[dispatch])


  return (
    <div className="app">
      
      <Router>
        {user? (<Switch>
        <Route exact path="/">
            <HomeScreen />
          </Route>
          
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          
        
        
        </Switch>) :<LoginScreen />}
        
    </Router>




    </div>
  );
}

export default App;

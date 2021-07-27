import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Home =require('./components/Home')
const Fav =require ('./components/Fav')
const Header=require('./components/Header')




class App extends Component {
  render(){
  return(
    <>
     <Header/>
  <Router>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/fav-list">
      <Fav />
    </Route>
  </Switch>
</Router>,
     </>
          
  )}
        
}


export default App;
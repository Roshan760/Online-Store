import React, { Component } from 'react';
import {Switch,Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './component/Navbar';
import Productlist from './component/Productlist';
import Details from './component/Details';
import Cart from './component/cart';
import Default from './component/Default';
import Modal from './component/Modal';

class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar></Navbar>
       <Switch>
         <Route exact path="/" component={Productlist}></Route>
         <Route path="/details" component={Details}></Route>
         <Route path="/cart" component={Cart}></Route>
         <Route component={Default}></Route>
       </Switch>
       <Modal/>
     </React.Fragment>
    );
  }
}

export default App;

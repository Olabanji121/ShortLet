import React, { Component } from "react";
import "./resources/styles.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Header from './components/header_footer/Header';
import Booking from "./pages/Booking";


export default class App extends Component {
  render() {
    return (
      <> 
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <Route path="/booking/:slug" exact component={Booking}/>
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

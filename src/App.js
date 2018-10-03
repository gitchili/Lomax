import React, { Component } from "react";
import Navigation from "./components/Nav/Navigation";
import Header from "./components/Header";
// import Home from "./components/containers/pages/Home";

import "./App.css";




class App extends Component {
  render() {
    return <div className="App-Container">
        <Header />
      <Navigation />
   
     {/* <Home /> */}
</div>;
  }
}

export default App;

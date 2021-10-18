import React from "react";
import './style.css';
import Map from "./components/Map";


class App extends React.Component{
    render(){
      return(
        <><header>
          <h1 className="title-navbar"> CANIS<b className="title-black">MAJORIS </b></h1>
        </header>
        <Map/>
        </>
      )
    }
  }

export default App
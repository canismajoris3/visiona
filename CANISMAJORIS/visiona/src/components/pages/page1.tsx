import React from "react";
import Map from '../mapa/Map';

class Page1 extends React.Component{
    render(){
            return (
                <div>
                  <header>
                    <h1 className="title-navbar"> CANIS<b className="title-black"> MAJORIS </b></h1>
                  </header>
            
                  <Map />
                </div>
              )
    }
}

export default Page1;
import React from "react";
import Sidebar from "./Sidebar";


class Map extends React.Component{
    render(){
        return(
            <div className="mapa">
                <div id="map">
                </div>
                <Sidebar/>
                <button className="btn-download"><b>DOWNLOAD</b></button>
            </div>
        )
    }
}
export default Map 
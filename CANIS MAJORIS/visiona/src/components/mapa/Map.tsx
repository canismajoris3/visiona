import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay } from "react-leaflet";
import { LatLngBounds } from "leaflet";


class Map extends React.Component{

    constructor(props: any){
        super(props)
        
    }


    // imageBounds = new LatLngBounds([], [cord2, cord3]);

    render() {
        return (
            <>
                <div className="mapa">
                    <MapContainer
                        center={[51.505, -0.09]}
                        zoom={13}
                        scrollWheelZoom={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                    {/* <ImageOverlay bounds={imageBounds} url={url} /> */}
                    </MapContainer>
                </div>
                    <Sidebar />

                <button className="btn-download"> DOWNLOAD </button>

            </>
        );
    }
}

export default Map;

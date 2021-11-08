import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class Map extends React.Component {


    render() {
        return (
            <>
                <div className="mapa">

                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />
                        
                    </MapContainer>

                    
                </div>

                <button className='btn-download'> DOWNLOAD </button>
                
                <Sidebar />

            </>
        )
    }
}

export default Map;
import React from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'
import './App.css';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => {

  

  return (

      <div>
        <Sidebar/>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} zoomControl={false}>
          <ZoomControl position="bottomright"/>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        </MapContainer>
      </div>
  );
}

export default App;

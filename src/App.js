import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import L from "leaflet";
import leafGreen from "./assets/leaf-green.png";
import leafShadow from "./assets/leaf-shadow.png";

import {customer_api as locations} from './customers_api'

class App extends React.Component {
  state = {
    location: {
      XCST: 35.357696204467516,
      YCST: 51.21276855468751,
    },
  };

  greenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  render() {
    const customerLocation = [
      this.state.location.XCST,
      this.state.location.YCST,
    ];
    return (
      <MapContainer className="map" center={customerLocation} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {locations.map((item) => {
          return (
            <Marker key={item.SerialNoCST} position={[item.XCST , item.YCST]} icon={this.greenIcon}>
              <Popup>
                <h3>{item.NameCST}</h3>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    );
  }
}

export default App;

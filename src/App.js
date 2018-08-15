import React, { Component } from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import Map from './Map';

class App extends Component {
  state = {

      markers: [
            {"id": "Ancient Roman theatre",
            "position": {lat: 42.146884, lng: 24.751097}
          },
            {"id": "Roman staduim Philipopol",
            "position": {lat: 42.147719, lng: 24.748050}
          },
            {"id": "Old town",
            "position": {lat: 42.151076, lng: 24.752288}
          },
            {"id": "Singin fountaines",
            "position": {lat: 42.140633, lng: 24.745798}
          },
            {"id": "Monument of union",
            "position": {lat: 42.151364, lng: 24.744446}
          }
    ]
  }

    render() {

      return (
        <div>
      <h1 className="heading" > Top 5 places to visit in Plovdiv, Bulgaria </h1>
      <div className="mapContainer">
        <section className="menu" tabIndex="0">
          <div id='sidebar'>
          <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-menu-hamburger"></span> Menu
      </button>
          </div>
        </section>

        <Map
        containerElement={ <div style={{ height: `100vh`,  width: `80%` }} /> }
        mapElement={ <div style={{ height: `100vh`, margin: 0 }} /> }
        loadingElement={<div style={{ height: `100vh`, width: `80%`, margin: 0 }} />}
        googleMapURL ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCMGeelHXsg0DHtykZeMFwRCQAmbc7M71c&v=3.exp&libraries=geometry,drawing,places'
        markers = {this.state.markers}/>
      </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import axios from 'axios';

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
            {"id": "Singing fountaines",
            "position": {lat: 42.140633, lng: 24.745798}
          },
            {"id": "Monument of union",
            "position": {lat: 42.151364, lng: 24.744446}
          }
    ]
  }
componentDidMount() {
  this.getVenues()
}

getVenues = () => {
  const endPoint = 'https://api.foursquare.com/v2/venues/search?ll=42.148549,24.752780&&query=sights&intent=checkin&client_id=SNUFI41U1RKL0CU4SQWG0JMXK1LHGB5T5GVNQQ22L521FJNA&client_secret=C0ULCJZYKJGXBUULDW0PGRU5HOS2GD1WL4GBYTC43VLK3OBM&v=20180819&v=20180819';

axios.get(endPoint)
.then(response => {
  console.log(response)
})
.catch(error => {
  console.log("Error!" + error)
})
}
    render() {
      const markers = this.state.markers;

      return (
        <div>
      <h1 className="heading" > Top 5 places to visit in Plovdiv, Bulgaria </h1>
      <div className="mapContainer">
        <section className="menu" tabIndex="0">
          <div id='sidebar'>
          <button type="button" className="btn btn-default btn-sm">
        <span className="glyphicon glyphicon-menu-hamburger"></span> Menu
      </button>
      <div className = 'list'>
      <ul className = 'places'>{
        markers.map((marker,i) =>
      (<li key={i}>{marker.id}</li>))
        //onClick={() => {this.props.onToggleOpen(marker.id)}}
      }
      </ul>
        </div>
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

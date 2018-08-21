import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import axios from 'axios';
import Hamburger from './hamburger'

class App extends Component {
  state = {
      markers: [],
      query:'',
      places: []
  }

componentDidMount() {
  this.getVenues()
}

getVenues = () => {
  const endPoint = 'https://api.foursquare.com/v2/venues/search?ll=42.148549,24.752780&&query=restaurant&intent=checkin&client_id=SNUFI41U1RKL0CU4SQWG0JMXK1LHGB5T5GVNQQ22L521FJNA&client_secret=C0ULCJZYKJGXBUULDW0PGRU5HOS2GD1WL4GBYTC43VLK3OBM&v=20180819&v=20180819';

axios.get(endPoint)
.then(response => {
  this.setState ({
    markers: response.data.response.venues
  })
})
.catch(error => {
  console.log("Error!" + error)
})
}

    render() {
      const {markers, query, places, infoWindow} = this.state;

  /*  if (query) {
      markers.forEach((l,i) => {
        if(l.name.toLowerCase().includes(query.toLowerCase())) {
          places[i].setVisible(true)
        } else {
          if (infoWindow.marker === places[i]){
            // close the info window if marker removed
            infoWindow.close();
          }
          places[i].setVisible(false)
        }
      })
    } else {
      markers.forEach((l,i) => {
        if (places.length && places[i]) {
          places[i].setVisible(true)
        }
      })
    }
*/
      return (
        <div>
      <div className="mapContainer">
      <h1 className="heading" > Restaurants in Plovdiv</h1>
      <Hamburger />
        <section className="menu" tabIndex="0">
          <div id='sidebar'>
          <div className='search'>
            <input
              type="text"
              placeholder="Filter"
              value={ query }
              onChange={(e) => this.updateQuery(e.target.value)}/>
                        </div>
      <div className = 'list'>
      <ul className = 'places'>{
        markers.map((marker,i) =>
      (<li key={i}>{marker.name}</li>))
        //onClick={() => {this.props.onToggleOpen(marker.id)}}
      }
      </ul>
        </div>
        </div>
        </section>
        <div id='map'>
        <Map
        containerElement={ <div className='map' style={{ height: `100vh` }} /> }
        mapElement={ <div style={{ height: `100vh`}} /> }
        loadingElement={<div className='loadingEl' style={{ height: `100vh` }} />}
        googleMapURL ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCMGeelHXsg0DHtykZeMFwRCQAmbc7M71c&v=3.exp&libraries=geometry,drawing,places'
        markers = {this.state.markers}/>
        </div>

      </div>
      </div>
    );
  }
}
export default App;

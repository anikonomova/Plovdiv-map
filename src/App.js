import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import axios from 'axios';
import Hamburger from './hamburger'
import Search from './Search';

class App extends Component {
  state = {
      markers: [],
      query:'',
      places: [],
      isOpen: false,
      openInfoWindow: null,
      InfoWindowIndex: '',
      filtered: []
  }


onToggleOpen = () => {
  this.setState({
    isOpen: true
  })
}

onToggleClose = () => {
  this.setState({
    isOpen: false
  })
}

openInfoWindow = (marker) => {
         this.setState({
         isOpen : true,
         InfoWindowIndex: marker
    })
  }

  updateQuery = (filtered) => {
      this.setState({ filtered })
    }



componentDidMount() {
  this.getVenues()
}

//fetch foursquare, get getVenues

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
// click on list opens InfoWindow

    render() {
      const {markers} = this.state;

      return (
        <div>
      <div className="mapContainer">
      <h1 className="heading" > Restaurants in Plovdiv</h1>
      <Hamburger />
      <section className="menu" tabIndex="0">
      <Search
          markers={markers}
          filtered={this.state.filtered}
          updateQuery={this.updateQuery.bind(this)}
          openInfoWindow={this.openInfoWindow}
      />
        </section>
        <div id='map'>
        <Map
        containerElement={ <div className='map' style={{ height: `100vh` }} /> }
        mapElement={ <div style={{ height: `100vh`}} /> }
        loadingElement={<div className='loadingEl' style={{ height: `100vh` }} />}
        googleMapURL ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCMGeelHXsg0DHtykZeMFwRCQAmbc7M71c&v=3.exp&libraries=geometry,drawing,places'
        markers = {this.state.markers}
        openInfoWindow={this.openInfoWindow}
        onToggleOpen={this.onToggleOpen}
        isOpen={this.state.isOpen}
        onCloseClick={this.onToggleClose}
        InfoWindowIndex={this.state.InfoWindowIndex}
        filtered={this.state.filtered}
          />
        </div>

      </div>
      </div>
    );
  }
}
export default App;

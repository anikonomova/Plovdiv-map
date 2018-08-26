import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Info from './InfoWindow';
const { compose } = require("recompose");

 const Map = compose(withScriptjs,withGoogleMap)(props => (
      <GoogleMap
        center = { { lat: 42.148549, lng: 24.752780 } }
        defaultZoom = { 14 }
        onClick={props.onToggleClose}
      >

      {
        props.filtered.map(
          (marker)=>(
            <div
              id='map'
              role='region'
              aria-label='map'
              key={marker.id}>
                <Marker
                  id={marker.id}
                  name={marker.name}
                  position={{ lat: marker.location.lat, lng: marker.location.lng }}
                  address={marker.location.formattedAddress}
                  onClick={() => {props.openInfoWindow(marker.id)}}
                  animation={props.InfoWindowIndex === marker.id ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.DROP
                    /*window.google.maps.event.addListener(marker, 'click', function() {
                                                  marker.setAnimation(window.google.maps.Animation.BOUNCE);
                                                })*/
                                              }
              >
              {(props.isOpen && props.InfoWindowIndex === marker.id) && <InfoWindow onCloseClick={props.onToggleClose}>
              <Info
              info={marker.name}
              />
              </InfoWindow>}
              </Marker>
  </div>
)
)
}

            </GoogleMap>
    )
   );

export default Map;

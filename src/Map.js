import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Info from './InfoWindow';
const { compose, withProps, withStateHandlers } = require("recompose");

 const Map = compose(withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,withGoogleMap)(props => (
      <GoogleMap
        center = { { lat: 42.148549, lng: 24.752780 } }
        defaultZoom = { 14 }
      >

      {
        props.markers.map(
          (marker)=>(
            <div key={marker.id}>
              <Marker
              id={marker.id}
              position={marker.position}
              onClick={props.onToggleOpen}
              >
              {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
              <Info
              info={marker.id}/>
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

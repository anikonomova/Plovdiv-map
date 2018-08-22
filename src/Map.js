import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Info from './InfoWindow';
const { compose, withProps, withStateHandlers } = require("recompose");

 const Map = compose(withStateHandlers(() => ({
    isOpen: false,
    openInfoWindow: null,
    //onclickList: null
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    openInfoWindow: ({ openInfoWindow, isOpen }) => (i) => ({
      isOpen: !isOpen,
      InfoWindowIndex: i
    }),
  /*
      })
    } */
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
              name={marker.name}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              // address={marker.location.address}
              onClick={() => {props.openInfoWindow(marker.id)}}
              animation={window.google.maps.Animation.DROP}
              >
              {(props.isOpen && props.InfoWindowIndex === marker.id) && <InfoWindow onCloseClick={props.onToggleOpen}>
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

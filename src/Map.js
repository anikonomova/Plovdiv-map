import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Info from './InfoWindow';
const { compose, withProps, withStateHandlers } = require("recompose");

 const Map = compose(withStateHandlers(() => ({
    isOpen: false,
    openInfoWindow: null,
    onclickList: null
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    openInfoWindow: ({ openInfoWindow, isOpen }) => (i) => ({
      isOpen: !isOpen,
      InfoWindowIndex: i
    }),
    onclickList: (onclickList, openInfoWindow) => {
      document.querySelector('.places').addEventListener('click', function (e) {
        if (e.target && e.target.nodeName === "LI") {
          openInfoWindow(e)
        }
      })
    }
  }),


  withScriptjs,withGoogleMap)(props => (
      <GoogleMap
        center = { { lat: 42.148549, lng: 24.752780 } }
        defaultZoom = { 15 }
      >

      {
        props.markers.map(
          (marker)=>(
            <div key={marker.id}>
              <Marker
              id={marker.id}
              name={marker.name}
              position={{ lat: marker.location.lat, lng: marker.location.lng }}
              onClick={() => {props.openInfoWindow(marker.id)}}
              >
              {(props.isOpen && props.InfoWindowIndex === marker.id) && <InfoWindow onCloseClick={props.onToggleOpen}>
              <Info
              info={marker.name}/>
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

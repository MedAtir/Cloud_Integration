import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


function MapContainer(props) {
    return (
      <Map
        google={props.google}
        zoom={14}
        initialCenter={{ lat: 31.7917, lng: -7.0926 }}
      />
    );
  }
  
  export default GoogleApiWrapper({
    apiKey: 'KEY API'
  })(MapContainer);
  

import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = () => <div className="marker"></div>;

const App = () => {
   // Define the location (Eiffel Tower, Paris, France)
  const location = {
    address: 'Eiffel Tower, Paris, France',
    lat: 48.8584,
    lng: 2.2945
  };
  // Define the map options
  const mapOptions = {
    center: {
      lat: location.lat,
      lng: location.lng
    },
    zoom: 14
  };

  return (
    <div className="app">
      <div className="map">
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCdMDQd2GtOV_Au8lxpIbQLeMlwT9_ai8w' }} 
          defaultCenter={mapOptions.center} // Set the default center of the map
          defaultZoom={mapOptions.zoom} // Set the default zoom level of the map
        >
          <AnyReactComponent
            lat={mapOptions.center.lat} // Pass the latitude of the center
            lng={mapOptions.center.lng} // Pass the longitude of the center
          />
        </GoogleMapReact>
      </div>
      <div className="content">
        <h1>Welcome to My Amazing App!</h1>
        <p>Discover the world with Google Maps.</p>
      </div>
    </div>
  );
};

export default App;

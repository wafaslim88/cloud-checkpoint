/*import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = () => <div className="marker"></div>;

const App = () => {
  const location = {
    address: 'ENIM Monastir, Monastir, Tunisia',
    lat: 35.7520,
    lng: 10.8005
  };

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
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <AnyReactComponent
            lat={mapOptions.center.lat}
            lng={mapOptions.center.lng}
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

export default App;*/
import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = () => <div className="marker"></div>;

const App = () => {
  const location = {
    address: 'Eiffel Tower, Paris, France',
    lat: 48.8584,
    lng: 2.2945
  };

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
          bootstrapURLKeys={{  key: 'AIzaSyCdMDQd2GtOV_Au8lxpIbQLeMlwT9_ai8w'  }}
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <AnyReactComponent
            lat={mapOptions.center.lat}
            lng={mapOptions.center.lng}
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

import React from 'react'

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
 
import { MapTitle, Container } from '../../styles'

export class MapContainer extends React.Component {
  render() {
    const mapStyles = {
        position: 'relative',
        width: '100%',
        height: '800px',
      };
    return (
        <Container>
            <div id="map">
                <MapTitle>
                    VENHA CONHECER
                </MapTitle>
                <Map
                    google={this.props.google}
                    style={mapStyles}
                    zoom={16}
                    scrollwheel={false}
                    initialCenter={{
                        lat: -29.91475989,
                        lng: -51.17675453
                    }}
                >
                    <Marker position={{ lat: -29.91475989, lng: -51.17675453}} />
                </Map>
            </div>
        </Container>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)

/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 37.774, lng: -122.419 }}
  />
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMapExample extends Component {

  render() {
    return (
      <SimpleMapExampleGoogleMap
        containerElement={
          <div style={{ 
            height: `0vw` 
          }} />
        }
        mapElement={
          <div style={{ 
            height: `0vh` 
          }} />
        }
      />
    );
  }
}
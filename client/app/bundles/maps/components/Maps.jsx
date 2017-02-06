// import React from 'react';

// export default class Maps extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       visible: true
//     };
//   }

//   componentDidMount() {
//     console.log('Maps!')
//   }

//   render() {
//     return (
//       <div className="mapsContainer">
//         <div className="box">
//           <p>this is a map.</p>
//         </div>
//       </div>
//     )
//   }
// }

// Maps.propTypes = {

// };
// Maps.defaultProps = {

// };


// ASYNC
// import _ from "lodash";

// import {
//   default as React,
//   Component,
//   PropTypes,
// } from "react";

// import FaSpinner from "react-icons/lib/fa/spinner";

// import withScriptjs from "scriptjs";

// import {
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// /*
//  * This is the modify version of:
//  * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
//  *
//  * Loaded using async loader.
//  */
// const AsyncGettingStartedExampleGoogleMap = _.flowRight(
//   withScriptjs,
//   withGoogleMap,
// )(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map(marker => (
//       <Marker
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));

// export default class AsyncGettingStartedExample extends Component {
//   static propTypes = {
//     toast: PropTypes.func.isRequired,
//   };

//   state = {
//     markers: [{
//       position: {
//         lat: 25.0112183,
//         lng: 121.52067570000001,
//       },
//       key: `Taiwan`,
//       defaultAnimation: 2,
//     }],
//   }

//   handleMapLoad = this.handleMapLoad.bind(this);
//   handleMapClick = this.handleMapClick.bind(this);
//   handleMarkerRightClick = this.handleMarkerRightClick.bind(this);

//   handleMapLoad(map) {
//     this._mapComponent = map;
//     if (map) {
//       console.log(map.getZoom());
//     }
//   }

//   /*
//    * This is called when you click on the map.
//    * Go and try click now.
//    */
//   handleMapClick(event) {
//     const nextMarkers = [
//       ...this.state.markers,
//       {
//         position: event.latLng,
//         defaultAnimation: 2,
//         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//       },
//     ];
//     this.setState({
//       markers: nextMarkers,
//     });

//     if (nextMarkers.length === 3) {
//       this.props.toast(
//         `Right click on the marker to remove it`,
//         `Also check the code!`
//       );
//     }
//   }

//   handleMarkerRightClick(targetMarker) {
//     /*
//      * All you modify is data, and the view is driven by data.
//      * This is so called data-driven-development. (And yes, it's now in
//      * web front end and even with google maps API.)
//      */
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }

//   render() {
//     return (
//       <AsyncGettingStartedExampleGoogleMap
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg"
//         loadingElement={
//           <div style={{ height: `100%` }}>
//             <FaSpinner
//               style={{
//                 display: `block`,
//                 width: `80px`,
//                 height: `80px`,
//                 margin: `150px auto`,
//                 animation: `fa-spin 2s infinite linear`,
//               }}
//             />
//           </div>
//         }
//         containerElement={
//           <div style={{ height: `100%` }} />
//         }
//         mapElement={
//           <div style={{ height: `100%` }} />
//         }
//         onMapLoad={this.handleMapLoad}
//         onMapClick={this.handleMapClick}
//         markers={this.state.markers}
//         onMarkerRightClick={this.handleMarkerRightClick}
//       />
//     );
//   }
// }

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
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
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
          <div style={{ height: `100vw` }} />
        }
        mapElement={
          <div style={{ height: `100vh` }} />
        }
      />
    );
  }
}
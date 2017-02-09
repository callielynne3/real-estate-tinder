/* global google */
import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps/lib";

import SearchBox from "react-google-maps/lib/places/SearchBox";


const INPUT_STYLE = {
  boxSizing: `border-box`,
  MozBoxSizing: `border-box`,
  border: `1px solid transparent`,
  width: `240px`,
  height: `32px`,
  marginTop: `27px`,
  padding: `0 12px`,
  borderRadius: `1px`,
  boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
  fontSize: `14px`,
  outline: `none`,
  textOverflow: `ellipses`,
};

const SearchBoxExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={13}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.CENTER}
      onPlacesChanged={props.onPlacesChanged}
      inputPlaceholder="Find your new Hôm"
      inputStyle={INPUT_STYLE}
    />
    {props.markers.map((marker, index) => (
      <Marker position={marker.position} key={index} />
    ))}
  </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SearchBoxExample extends Component {

  state = {
    bounds: null,
    center: {
      lat: 37.7749,
      lng: -122.4194,
    },
    markers: [],
    disableDefaultUI: true,
  };

  handleMapMounted = this.handleMapMounted.bind(this);
  handleBoundsChanged = this.handleBoundsChanged.bind(this);
  handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
  handlePlacesChanged = this.handlePlacesChanged.bind(this);
  handlePropertyTypeChange = this.handlePropertyTypeChange.bind(this);
  handlePriceRangeChange = this.handlePriceRangeChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  handleMapMounted(map) {
    this._map = map;
  }

  handleBoundsChanged() {
    this.setState({
      bounds: this._map.getBounds(),
      center: this._map.getCenter(),
    });
  }

  handleSearchBoxMounted(searchBox) {
    this._searchBox = searchBox;
  }

  handlePlacesChanged() {

    const places = this._searchBox.getPlaces();

    // Add a marker for each place returned from search bar
    const markers = places.map(place => ({
      position: place.geometry.location,
    }));

    // Set markers; set map center to first search result
    const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

    this.setState({
      center: mapCenter,
      markers,
      address: places[0].formatted_address
    });
  }

  handlePropertyTypeChange(e) {
    this.setState({
      propertyType: e.target.value,
    });
  }

  handlePriceRangeChange(e) {
    this.setState({
      priceRange: e.target.value,
    });
  }

  handleSubmit() {
    const { address, priceRange, propertyType } = this.state;
    // const address = this.state.address
    // const priceRange = this.state.priceRange
    // const propertyType = this.state.propertyType

    console.log(address)
    console.log(priceRange)
    console.log(propertyType)
    // do your ajax here 'GET'
    // $.ajax(('get'))

  }

  render() {
    return (
      <div className="the-google-map">
        <SearchBoxExampleGoogleMap
          containerElement={
            <div style={{ height: `30vh` }} />
          }
          mapElement={
            <div style={{ height: `50vh` }} />
          }
          center={this.state.center}
          onMapMounted={this.handleMapMounted}
          onBoundsChanged={this.handleBoundsChanged}
          onSearchBoxMounted={this.handleSearchBoxMounted}
          bounds={this.state.bounds}
          onPlacesChanged={this.handlePlacesChanged}
          markers={this.state.markers}
        />
          <div className="rentalQueries">
            <select id="propertyType" onChange={this.handlePropertyTypeChange}>
              <option value="apartment">Studio/Apartment</option>
              <option value="room">Room</option>
            </select>
            <select id="priceRange" onChange={this.handlePriceRangeChange}>
              <option value="lowest">less than $1,000</option>
              <option value="low">$1,000 - $2,000</option>
              <option value="medium">$3,000 - $4,000</option>
              <option value="high">more than $4,000</option>
            </select>
            <button onClick={this.handleSubmit} style={{ zIndex: '9999' }}>
              Search
            </button>
          </div>
      </div>
    );
  }
}

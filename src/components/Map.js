import React, { Component } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWFuZ3VpYW5vIiwiYSI6ImNraDA4cDFpZDBzZzMycmswOW9idTgwdHgifQ.uPNs7wwJRm2h4sI8kqUbSQ";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -118.125591,
      lat: 33.876848,
      zoom: 15,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/eanguiano/ckh49z78509k119o8pom7j1ut",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });

    var el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker(el)
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(map);
  }

  render() {
    return (
      <div className="map-container">
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

import React from "react";
import { Image } from 'react-bootstrap';
import './App.css';
class Location extends React.Component {

    render() {
        return(
            <div id="location">
            <br />
            <br />
        <h2>{this.props.cityData.display_name}</h2>
        <h2>Latitude: {this.props.cityData.lat}</h2>
        <h2>Longitude: {this.props.cityData.lon}</h2>
        <br />
        <br />
        <Image id="image" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_API_KEY}&center=${this.props.cityData.lat},${this.props.cityData.lon}&zoom=13`}alt="city map" title="Return search map"  fluid/>
            </div>

        )
    }
}


export default Location
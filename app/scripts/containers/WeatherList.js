import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Chart from '../components/Chart';


class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    const center = {lat, lng: lon};

    return (
      <tr key={ name }>
        <td>
          <GoogleMapReact
            defaultCenter={ center }
            defaultZoom={12}
          />
        </td>
        <td>
          <Chart data={temps} color='red' units="K" />
        </td>
        <td>
          <Chart data={pressures} color='green' units="hPa"/>
        </td>
        <td>
          <Chart data={humidities} color='black' units="%" />
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperture (K) </th>
            <th> Pressure (hPa) </th>
            <th> Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);


import React, { Component } from 'react'
import dateformat from 'dateformat'

export default class Weathers extends Component {
  render() {
    
    return (
      <div className="col-md-2">
        {this.props.weatherData.list.map((weather, i) => {
            const temp = Math.round(parseFloat(weather.temp.day));
            const weatherDate = new Date(parseInt(weather.dt)*1000);
            const dateString = dateformat(weatherDate, 'ddd dd.mm');

            return (
                <div key={i}>
                  <div>
                    { dateString }
                  </div>
                  <div>
                    <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png" } />
                  </div>
                  <div>
                    {temp}°C
                  </div>
                  <div>
                    {weather.weather[0].description}
                  </div>

                </div>
            )
        })
        }
      </div>
    )
  }
}
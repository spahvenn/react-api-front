import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../actions/weather-actions'
import Weathers from '../components/weathers.js'

class Weather extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchWeather());
  }

  render() {

    if (this.props.weatherData.length === 0) {
      return (<div>Loading...</div>)
    }

    return (
      <div className="row">
        <Weathers weatherData={this.props.weatherData} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    weatherData: state.weatherData.items
  }
}

export default connect(mapStateToProps)(Weather)
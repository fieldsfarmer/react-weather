var React = require('react');

var WeatherMessage = ({location, temp})=>{
  return(
    <h4>The {location} is {temp}</h4>
  )
}

module.exports = WeatherMessage;

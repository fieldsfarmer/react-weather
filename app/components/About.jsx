var React = require('react');

var About = ()=>(
  <div>
    <h1 className="text-center">About</h1>
    <p>This is a web application built on ReactJS using api from Open Weather Map.</p>
    <p>Here are the tools I used:</p>
    <ul>
      <li><a href="https://facebook.github.io/react">React</a> - The JavaScript framework</li>
      <li><a href="http://openweathermap.org">Open Weather Map</a> - The weather API</li>
      <li><a href="http://foundation.zurb.com/">Foundation</a> - The CSS style</li>
    </ul>
    <p>The code is <a href="https://github.com/fieldsfarmer/reactweather">here</a>.</p>
  </div>
);

module.exports = About;

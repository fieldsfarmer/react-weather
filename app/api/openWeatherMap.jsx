var axios = require('axios');

const base_url = 'http://api.openweathermap.org/data/2.5/weather?&units=metric';
const api_key = '450297515e1700fbbf09ba9b97d293fd';
function getTemp(location){
  let encodedLocation = encodeURIComponent(location);
  let url = `${base_url}&appid=${api_key}&q=${encodedLocation}`;
  return(
    axios.get(url).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }
      else{
        return res.data.main.temp;
      }
    }, function(error){
      throw new Error(error.response.data.message);
    })
  )
}

module.exports = {
  getTemp: getTemp
}

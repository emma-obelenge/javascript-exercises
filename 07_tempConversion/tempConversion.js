const convertToCelsius = function(temperature) {
  return(parseFloat(((temperature - 32) / 1.8).toFixed(1)));
};

const convertToFahrenheit = function(temperature) {
  return(parseFloat(((1.8 * temperature) + 32).toFixed(1)));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

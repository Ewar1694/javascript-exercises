const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * (5/9);
  if(Number.isInteger(convertedTemp)){
    return convertedTemp;
  } else {
    return Number((convertedTemp).toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = ((9 * temp) / 5) + 32;
  if(Number.isInteger(convertedTemp)){
    return convertedTemp;
  } else {
    return Number((convertedTemp).toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

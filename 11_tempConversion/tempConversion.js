const convertToCelsius = function(temp) {
  let converTemp=(temp-32)*5/9;
  if(Number.isInteger(converTemp)){
    return converTemp;
  }
  return converTemp.toFixed(1);
};

const convertToFahrenheit = function(temp) {
  let converTemp=temp*9/5+32;
  if(Number.isInteger(converTemp)){
    return converTemp;
  }
  return converTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

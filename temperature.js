let fahrenheitValue;
function toCelsius(fahrenheitValue) {
  fahrenheitValue = parseInt(fahrenheitValue);
  document.getElementById("celsiusValue").innerHTML =
    (5 * fahrenheitValue - 32 * 5) / 9 + " " + "°C";
}
var celsiusValue;
function toFahrenheit(celsiusValue) {
  celsiusValue = parseInt(celsiusValue);
  document.getElementById("fahrenheitValue").innerHTML =
    (9 * celsiusValue) / 5 + 32 + " " + "°F";
}

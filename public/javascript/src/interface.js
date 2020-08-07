$(document).ready(function() {
  var thermostat = new Thermostat();
  /* default city is london on loading */
  displayWeather('London');
  /* */
  $('#powersaving-on').hide();
  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
    displayWeather(city);
  });
  updateTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').on('click', function() {
    thermostat.turnPowerSavingModeOn();
    $('#powersaving-on').hide();
    $('#powersaving-off').show();
    $('#powersaving-status').text('on');
    updateTemperature();
  });

  $('#powersaving-off').on('click', function() {
    thermostat.turnPowerSavingModeOff();
    $('#powersaving-off').hide();
    $('#powersaving-on').show();
    $('#powersaving-status').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temp());
    $('#temperature').attr('class', thermostat.energyUsage());
  };
  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = config.WEATHER_KEY;
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
      $('#display-city').text(city);
    })
  }
});

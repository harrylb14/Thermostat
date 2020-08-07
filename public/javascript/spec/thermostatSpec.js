'use strict';

describe('thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  })
  describe('it has a default temperature of 20', function(){

    it('has a temperature', function(){
      expect(thermostat.temp()).not.toEqual(null);
    });

    it('starts at 20 degree temperature', function(){
      expect(thermostat.temp()).toEqual(20);
    });
    it('can be reset to default temperature', function(){
      for (var i = 1; i <= 5; i++) {
        thermostat.up();
      }
      thermostat.reset();
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('power saving mode', function(){

    it('power saving mode is automatically on', function(){
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
    it('power saving mode can be turned off', function(){
      thermostat.turnPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toEqual(false);
    });
    it('power saving mode can be turned back on', function(){
      thermostat.turnPowerSavingModeOff();
      thermostat.turnPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toEqual(true);
    });
  });

  describe('increase temperature functionality', function(){

    it('can increase the temperature with an up function', function(){
      thermostat.up();
      expect(thermostat.temp()).toEqual(21);
    });
    it('there is a maximum temperature of 25 when power saving mode is on', function(){
      for (var i = 1; i <= 5; i++) {
        thermostat.up();
      }
      expect(thermostat.isMaximumTemp()).toEqual(true);
      
      thermostat.up();
      expect(thermostat.temp()).toEqual(25);
    });
    it('there is a maximum temperature of 32 when power saving mode is off', function(){
      thermostat.turnPowerSavingModeOff();
      for (var i = 1; i <= 12; i++) {
        thermostat.up();
      }
      expect(thermostat.isMaximumTemp()).toEqual(true);
      
      thermostat.up();
      expect(thermostat.temp()).toEqual(32);
    });
  });

  describe('decrease temperature functionality', function(){

    it('can decrease the temperature with a down function', function(){
      thermostat.down();
      expect(thermostat.temp()).toEqual(19);
    });

    it('there is a minimum temperature', function(){
      expect(thermostat.isMinimumTemp()).toEqual(false);
    });

    it('cannot decrease below minimum temperature', function(){
      for (var i = 1; i <= 10; i++) {
        thermostat.down();
      }
      expect(thermostat.temp()).toEqual(10);
      expect(thermostat.isMinimumTemp()).toEqual(true);

      thermostat.down();
      expect(thermostat.temp()).toEqual(10);
    });
  });  

  describe('energy usage output', function(){
    it('is low-usage when temp is below 18', function(){
      for (var i = 1; i <= 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('is medium-usage when temp is 19-25', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('is high-usage when temp is above 25', function(){
      thermostat.turnPowerSavingModeOff();
      for (var i = 1; i <= 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
})

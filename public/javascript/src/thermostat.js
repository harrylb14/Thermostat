class Thermostat{
  
  constructor(){
    this.DEFAULT_TEMP = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSavingMode = true;
    this.maxTempPowerSavingModeOn = 25;
    this.maxTempPowerSavingModeOff = 32;
    this.MEDIUM_ENERGY_TEMP = 18;
    this.HIGH_ENERGY_TEMP = 26;
    this._temp = this.DEFAULT_TEMP; 
  }
  
  temp() {
    return this._temp;
  };

  up() {
    if (this.isMaximumTemp()) {
      return;
    }
    this._temp += 1
  };

  down() {
    if (this.isMinimumTemp()) {
      return;
    }
    this._temp -= 1
  };

  isMinimumTemp() {
    return (this._temp === this.MINIMUM_TEMP);
  };

  isPowerSavingModeOn() {
    return this.powerSavingMode;
  };

  turnPowerSavingModeOff() {
    this.powerSavingMode = false;
  };

  turnPowerSavingModeOn() {
    this.powerSavingMode = true;
  };

  isMaximumTemp(){
    if (this.isPowerSavingModeOn()){
      return this.temp() === this.maxTempPowerSavingModeOn;
    }
    return this.temp() === this.maxTempPowerSavingModeOff;
  };

  reset() {
    this._temp = this.DEFAULT_TEMP;
  };

  energyUsage() {
    if (this.temp() < this.MEDIUM_ENERGY_TEMP) {
      return 'low-usage';
    }
    if (this.temp() < this.HIGH_ENERGY_TEMP) {
      return 'medium-usage';
    }
    return 'high-usage';
  };
}
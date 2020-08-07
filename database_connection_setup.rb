require './lib/database_connection'

if ENV['RACK_ENV'] == 'test'
  DatabaseConnection.setup('thermostat_test')
else
  DatabaseConnection.setup('thermostat')
end
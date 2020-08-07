def wipe_test_database
  connection = PG.connect(dbname: 'thermostat_test')
  connection.exec("TRUNCATE data RESTART IDENTITY;")
end
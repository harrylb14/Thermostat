require 'database_connection'

describe DatabaseConnection do
  describe '.setup' do 
    it 'sets up a connection to a database through PG' do
      expect(PG).to receive(:connect).with(dbname: 'thermostat_test')

      DatabaseConnection.setup('thermostat_test')
    end
  end

  describe '.query' do
    it 'executes a query via PG' do
      connection = DatabaseConnection.setup('thermostat_test')
      expect(connection).to receive(:exec).with("SELECT * FROM data;")
  
      DatabaseConnection.query("SELECT * FROM data;")
    end
  end
end
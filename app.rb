require 'sinatra/base'
require './database_connection_setup'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/' do
    File.read('public/index.html')
  end

  run! if app_file == $0
end
# Rack provides a minimal interface between webservers that support Ruby and Ruby frameworks.
#
# To use Rack, provide an "app": an object that responds to the call method, 
# taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each

require 'rack'
require 'pry'
require 'shotgun'

class App
  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    response = Rack::Response.new
    if req.path == "/"
      response.write "Welcome to Flatiron School"
    elsif req.path == "/seattle"
      response.write "Welcome to Flatiron School Seattle"
    elsif req.path == '/denver'
      response.write "Welcome to Flatiron School Denver"
    elsif req.path == "/chicago"
      response.write "Welcome to Flatiron School Chicago"
    elsif req.path == "/atlanta"
      response.write "Welcome to Flatiron School Atlanta"
    else
      response.write "School does not exist"
    end
    response.finish
  end
end

run App.new

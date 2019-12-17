# require_relative 'musical.rb'
# require_relative 'theater.rb'
# require_relative 'performance.rb'

# Quickly go over how many of our own 
# instances we should create
# Everyting in pry.

require 'pry'
require 'require_all'
require_all '.'

okhlahoma = Musical.new("Musical", "Chicago")
wicked = Musical.new("wicked", "NY")
cursed_child = Musical.new("Cursed Child", "Hogwarts")


broadway = Theater.new("Broadway", "NY")
chicago = Theater.new("Chicago", "Chicago")
paramount = Theater.new("Paramount", "Seattle")

p1 = Performance.new("11/11/11", okhlahoma, chicago)
p2 = Performance.new("12/12/12", wicked, paramount)
p3 = Performance.new("1/01/2019", cursed_child, paramount)

binding.pry
0
require 'pry'
require_relative 'tweet'
require_relative 'user'
require_relative 'like'

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")
sound = User.new("Soundarya")

t1 = Tweet.new("Coffeee is amazing", coffee_dad)
t2 = Tweet.new("Coffeee is ok", tea_uncle)
t3 = Tweet.new("Coffeee is weird", tea_uncle)


l1 = Like.new(sound, t1)
Like.new(sound, t2 )
Like.new(sound, t3 )
Like.new(coffee_dad, t1)
Like.new(tea_uncle, t2)

binding.pry
0
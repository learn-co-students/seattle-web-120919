require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'
require_relative 'models/like'

soundarya = User.new("Soundarya")
cd = User.new("Coffee Dad")
tu = User.new("Tea Uncle")

t1 = cd.post_tweet("COFFFEEEEEE")
t2 = tu.post_tweet("tea is cool")
t3 = tu.post_tweet("coffee is meh")
t4 = cd.post_tweet("tea blah")
t5 = soundarya.post_tweet("Life is great!!")

l1 = cd.like_tweet(t1)
l2 = cd.like_tweet(t3)
l3 = tu.like_tweet(t4)
l4 = soundarya.like_tweet(t2)
l5 = soundarya.like_tweet(t1)
l5 = soundarya.like_tweet(t5)



binding.pry
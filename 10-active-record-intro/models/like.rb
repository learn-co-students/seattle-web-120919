class Like < ActiveRecord::Base
    belongs_to :user
    belongs_to :tweet
    # @@all =  [ ]

    # attr_accessor :tweet_id, :user_id
    
    # def initialize(user_id, tweet_id)
    #     @user_id = user_id
    #     @tweet_id = tweet_id
    #     @@all << self
    # end

    # def self.all
    #     @@all
    # end
end
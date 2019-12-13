class Like
   
    attr_accessor :tweet, :user

    @@all = [ ]

    def initialize(user, tweet)
        @tweet = tweet
        @user = user

        @@all << self
    end

    def self.all
        @@all
    end


end
class User
    attr_reader :username

    @@all = [ ]

    def initialize(username)
        @username = username
        # @tweets = [ ]
        @@all << self
        # binding.pry
    end

    def self.all
        @@all
    end

    def post_tweet(message)
        #creates a new tweet
        # Tweet.new()
        # binding.pry
        tweet = Tweet.new(message, self)
        #add it to the user tweets collection
        # @tweets << tweet
    end

    def tweets
        #[#<T>, #<T>, #<T>]
        # @@all, and user variable to find this information
        # binding.pry
        Tweet.all.find_all do |tweet|
            self == tweet.user
        end    
    end

    # - `#like_tweet` that accepts as a tweet instance as a parameter
    def like_tweet(tweet)
        # object tweet that's passed
        # shovel into the like class
        # Creating a new instance
        # how to account for duplicate likes
        # binding.pry
        Like.new(self, tweet)
    end

    # - `#liked_tweets` that returns a collection of all the tweets this user has liked

    def likes 
        # binding.pry
        Like.all.find_all do |like|
            self == like.user  
        end  
    end

    def liked_tweets
        # Talk to the like classd
        self.likes.map do |like|
            like.tweet
        end
    end

    def unlike_tweet(tweet)
        # binding.pry
        like = Like.all.find do |like|
            like.user == self && like.tweet == tweet
        end
        Like.all.delete(like)
    end

    private
    def format_tweet(message)
        message + ":)."
    end

end
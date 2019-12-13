class Tweet

    @@all = [ ]
    attr_accessor :message, :user

    def initialize(message, user)
        @message = message
        @user = user
        @@all << self
    end

    def self.all
        @@all
    end

    def likes 
        # binding.pry
        Like.all.find_all do |like| 
            # binding.pry
            self == like.tweet  
        end  
    end
    
    def likers
        # Talk to the like class
        self.likes.map do |like|
            like.user
        end
    end

end
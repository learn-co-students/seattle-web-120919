class Tweet < ActiveRecord::Base
    belongs_to :user
    has_many :likes
    # @@all = [ ]

    # attr_reader :message
    # attr_accessor :user_id, :id

    # def initialize(message, user_id, id=nil)
    #     @user_id = user_id
    #     @message = message
    #     @id = id
    #     # @@all << self
    # end

    # def self.create_table
    #     DB[:conn].execute("CREATE TABLE tweets(id INTEGER PRIMARY KEY, message TEXT, user_id INTEGER)")
    # end

    # def self.insert_data(message, user)
    #     # binding.pry
    #     DB[:conn].execute("INSERT INTO tweets(message, user_id) VALUES(?,?)", message, user.first.id)
    # end

    # def self.all
    #     # @@all
    #     tweets = DB[:conn].execute("SELECT * FROM tweets")
    #     tweets.map do |tweet|
    #         Tweet.new(tweet["message"], tweet["user_id"], tweet["id"])
    #     end
    # end

    # # def likes
    # #     Like.all.select {|like| like.tweet == self }
    # # end

    # # def users_who_liked_me
    # #    likes.map {|like| like.user}
    # # end
end
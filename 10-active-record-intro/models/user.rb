class User < ActiveRecord::Base
    has_many :tweets
    has_many :likes
    # attr_accessor :username, :id

    # def initialize(user)
    #     @username = user["username"]
    #     @id = user["id"]
    # end

    # def self.all
    #     users = DB[:conn].execute("SELECT * FROM users")
    #     users.map do |user|
    #         User.new(user)
    #     end           
    # end

    # #Create
    # def self.create_table
    #     DB[:conn].execute("CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT)")
    # end

    # #Create
    # def self.insert_data(username)
    #     DB[:conn].execute("INSERT INTO users(username) VALUES(?)", username)
    #     # binding.pry
    #     id = DB[:conn].execute("SELECT last_insert_rowid()").first["last_insert_rowid()"]
    #     users = DB[:conn].execute("SELECT * FROM users WHERE id = ?", id)
    #     users.map do |user|
    #         User.new(user)
    #     end 
    # end

    # # Read
    # def self.find_by_username(username)
    #     users = DB[:conn].execute("SELECT * FROM users WHERE username = ?", username)
    #     users.map do |user|
    #         User.new(user)
    #     end 
    # end

    # # instance methods -> self : the instance of the user
    # def post_tweet(message)
    #     tweet = Tweet.insert_data(message, self)
    # end

    # #Update
    # # instance methods -> self : the instance of the user
    # def update(new_username)
    #     #when it's a class method, you don't have access to which instance you want to edit
    #     # you would to a find first
    #     # then update
    #     users = DB[:conn].execute("UPDATE users SET username = ? WHERE username = ?", new_username, self.username)
    #     users.map do |user|
    #         User.new(user)
    #     end
    # end

    # def tweets
    #     # Tweet.all.select { |tweet| tweet.user == self }
    #     # binding.pry
    #     Tweet.where(user_id: self.id)
    # end

    # def likes
    #    Like.all.select {|like| like.user == self }
    # end

    # def liked_messages
    #     likes.map { |like| like.tweet.message }
    # end
end
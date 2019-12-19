class Album
    attr_accessor :id, :title, :artist_id

    # @@all = [ ]

    def initialize(hash_album_input)
        # binding.pry
        @id = hash_album_input["id"]
        @title = hash_album_input["title"]
        @artist_id = hash_album_input["artist_id"]
        # @@all << self
    end



    #What does this translate to in the world of SQL
    # [ #<>, #<>]
    # Read
    def self.all
        sql = "SELECT * FROM albums;"
        albums = DB.execute(sql)
        albums.map do |album|
            Album.new(album)
        end
    end

    # CREATE 
    # inserting data into the database
    def self.create(title, artist_id)
        sql = "INSERT INTO albums(title, artist_id) VALUES(?,?)"
        DB.execute(sql, title, artist_id)
        @@all.last
    end

    def self.update_title(old_title, new_title)
        sql = "UPDATE albums SET title = ? WHERE title = ?"
        DB.execute(sql, new_title, old_title)
        Album.new(DB.execute("SELECT * FROM albums WHERE title = ? LIMIT 1", new_title).first)
        # binding.pry
    end
end
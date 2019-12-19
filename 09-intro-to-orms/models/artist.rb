class Artist

    attr_accessor :name, :id

    def initialize(input)
        @name = input["name"]
        @id = input["id"]
    end

    def self.all
        sql = "SELECT * FROM artists"
        artists = DB.execute(sql)
        artists.map do |artist|
            Artist.new(artist)
        end
    end

    def albums
        # albums.id, albums.title, albums.artist_id
        # SELECT *
        # INNER JOIN between artists and albums
        # artist.id and albums.artist_id
        # binding.pry
        sql = "SELECT * 
              FROM artists INNER JOIN albums
              ON artists.id == albums.artist_id AND artists.id == ?"
        data = DB.execute(sql, self.id)
        albums_objects = [ ]
        data.each do |data|
            album = Album.new(data)
            albums_objects << album
        end
        albums_objects

        # Album.all.select do |album|
        #     self.id == album.artist_id
        # end
        # data.map do |data|
        #     Album.new(data)
        # end
    end

end
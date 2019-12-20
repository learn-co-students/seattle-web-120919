#create = Artist.new + Artist.save
s = Artist.create(name: "Soundarya")
j = Artist.create(name: "Jazz")
a = Artist.create(name: "Alden")
c = Artist.create(name: "Cole")

chris = Artist.new(name: "Chris")
chris.save

asf = Album.create(title: "Holiday Friday!!", artist_id: s.id )
am = Album.create(title: "Holiday Monday!!", artist_id: j.id )
ahm = Album.create(title: "Holiday Monday!!", artist_id: s.id )
ac = Album.create(title: "Holiday Monday!!", artist_id: c.id )
ac1 = Album.create(title: "Holiday Tuesday!!", artist_id: a.id )
ac2 = Album.create(title: "Holiday Wednesday!!", artist_id: c.id )

pop = Genre.create(name: "Pop") 
rock = Genre.create(name: "Rock") 
edm = Genre.create(name: "EDM") 
hh = Genre.create(name: "Hip Hop")
rap = Genre.create(name: "Rap") 
country = Genre.create(name: "Country") 

Track.create(name: "New Year January", album_id: asf.id, genre_id: pop.id )
Track.create(name: "New Year January", album_id: am.id, genre_id: country.id)
Track.create(name: "New Year January", album_id: am.id, genre_id: edm.id)
Track.create(name: "New Year January", album_id: asf.id, genre_id: rap.id)
# binding.pry

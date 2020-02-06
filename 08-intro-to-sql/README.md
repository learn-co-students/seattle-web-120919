# QUESTIONS??????

# Thoughts on Databases, why do we need???
- store information
- persistance of data
- organization -> lead to also talking about ORMS
- ease of access, collaboration

# Intro to SQL
1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data).
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below
5. Introduce CRUD

##Question :

## Challenges
1. Write the SQL to return all of the rows in the tists table?
```sql
```

2. Write the SQL to select the artist with the name lack Sabbath"
```sql
```

3. Write the SQL to create a table named 'fans' with an auto-incrementing ID that's a primary key and a name eld of type text
```sql
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?
```sql
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
```sql
```

6. Write the SQL to return fans that are not fans of (artist_id : 169).
```sql
```

7. remove fans from our DB
```sql
```

8. Write the SQL to display an artists name next to eir album title
```sql
```

9. Write the SQL to display artist name, album title and number of tracks on that album
```sql
SELECT artists_name, albums_title, COUNT(id) AS number_of_tracks
	FROM (SELECT albums.id AS albums_id, artists.name AS artists_name, albums.title AS albums_title
	FROM artists JOIN albums
	ON artists.id == albums.artist_id)
INNER JOIN tracks 
ON tracks.album_id == albums_id
GROUP BY albums_title
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre
```sql
SELECT name,  genres_name 
FROM (SELECT artists_name as name, genres.name as genres_name
FROM (SELECT artists_name,  tracks.genre_id AS tracks_genre_id
	FROM (SELECT albums.id AS albums_id, artists.name AS artists_name, albums.title AS albums_title
	FROM artists JOIN albums
	ON artists.id == albums.artist_id)
INNER JOIN tracks 
ON tracks.album_id == albums_id
GROUP BY albums_title)
INNER JOIN genres 
ON genres.id == tracks_genre_id)
WHERE genres_name == "Pop"
```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have more than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least
```sql
```


# ORMS
- Jurassic Park - 8
	- Dinosaurs
	- Guests
	- Concessions
	- Vetrenarians
	- Rides
- Build your own pizza - 7
- Tracking and grading participation - 6
- Hogwarts - 4
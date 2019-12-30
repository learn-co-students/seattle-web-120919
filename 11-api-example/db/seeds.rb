url = "https://www.googleapis.com/books/v1/volumes?q=The+bible"

response = RestClient.get(url)
json_data = JSON.parse(response.body)

books = json_data["items"]

books.each do |book|
    title = book["volumeInfo"]["title"]
    publisher = book["volumeInfo"]["publisher"]
    publishedDate = book["volumeInfo"]["publishedDate"]
    pageCount = book["volumeInfo"]["pageCount"]
    Book.create({title: title, 
        publisher: publisher, 
        publishedDate: publishedDate, 
        pageCount: pageCount})
end


# binding.pry
puts "Seeds are done!"
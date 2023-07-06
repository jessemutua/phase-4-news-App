require 'net/http'
require 'json'

puts "Seeding ..."

url = URI.parse("https://newsapi.org/v2/top-headlines?country=us&apiKey=63097b3b010448cda333b15904c5c731")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url.request_uri)

response = http.request(request)

if response.code == "200"
  data = JSON.parse(response.body)

  if data["status"] == "ok"
    articles = data['articles']
    articles.each do |article|
      source_name = article['source']['name']
      category = Category.find_or_create_by(name: source_name)
      author = Author.find_or_create_by(name: article['author'])

      Article.create(
        title: article['title'],
        description: article['description'],
        url: article['url'],
        published: article['publishedAt'],
        image: article['urlToImage'],
        category_id: category.id,
        author_id: author.id
      )
    end

    puts "Done seeding"
  else
    puts "API request failed"
  end
else
  puts "Failed to connect to the API"
end

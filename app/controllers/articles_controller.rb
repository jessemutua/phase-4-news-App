class ArticlesController < ApplicationController
    def index
        articles=Article.all
        render json: articles 
    end
    def show
        article=Article.find_by(id: params[:id])
        if article
            render json: article, include: :categories
        else
            render json: {error: "Article not found"}, status: :unprocessable_entity 
        end
    end
    
   def create
  author = Author.find_by(id: params[:author_id])

  if author
    article = author.articles.build(article_params)

    if article.save
      render json: article, status: :created
    else
      render json: { error: "Failed to create article" }, status: :unprocessable_entity
    end
  else
    render json: { error: "Author not found" }, status: :unprocessable_entity
  end
end


     private
     def article_params
        params.require(:article).permit(:title, :url, :description, :author_id, :published, :image )
     end
end

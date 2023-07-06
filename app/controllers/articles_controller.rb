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
            render json: {error: "Article not found"}
        end
    end
end

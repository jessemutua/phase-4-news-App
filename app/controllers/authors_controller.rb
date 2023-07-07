class AuthorsController < ApplicationController
    def index
        authors=Author.all
        render json: authors

    end
   def create
    author=Author.create(author_params)
    if author.save
        render json: author, include: :articles,  status: :created
    else
        render json: {error: "Failed to create Author account"}
    end
   end

   private
   def author_params
    params.permit(:name)
   end

end

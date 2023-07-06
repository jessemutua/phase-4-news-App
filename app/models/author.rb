class Author < ApplicationRecord
    has_many :Article
   has_many :categories, through: :articles
end

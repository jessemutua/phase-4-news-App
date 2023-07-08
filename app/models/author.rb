class Author < ApplicationRecord
    has_many :articles, foreign_key: 'author_id'
   has_many :categories, through: :articles
end

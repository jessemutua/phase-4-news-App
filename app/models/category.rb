class Category < ApplicationRecord
    has_many :articles
    has_many :authors, through: :articles
end

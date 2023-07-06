class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :url, :image, :published, :category_id, :author_id
end

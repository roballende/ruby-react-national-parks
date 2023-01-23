class User < ActiveRecord::Base
    has_many :wishlists
    has_many :parks, through: :wishlists
end
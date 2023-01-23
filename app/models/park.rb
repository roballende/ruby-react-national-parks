class Park < ActiveRecord::Base
    has_many :wishlists
    has_many :users, through: :wishlists
end
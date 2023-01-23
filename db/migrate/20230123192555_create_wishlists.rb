class CreateWishlists < ActiveRecord::Migration[6.1]
    def change
        create_table :wishlists do |t|
          t.string :review
          t.integer :rating
          t.boolean :favorite
          t.integer :user_id
          t.integer :park_id
        end
    end
end

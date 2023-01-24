class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    # USERS
    # GET 

    # REVIEWS
    # GET

    # POST

    # PATCH

    # DELETE

    # RATING
    get '/parks/:park_id/average_rating' do
        park = Park.find(params[:park_id])
        park.average_rating.to_json
    end

    # PARKS 
    get "/parks" do 
        parks = Park.all.order(:name)
        parks.to_json
    end

    get "/parks/:park_id" do 
        park = Park.find(params[:park_id])
        park.to_json
    end

end

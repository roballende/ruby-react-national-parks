class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/users" do
    # { message: "Good luck with your project!" }.to_json
    User.all.to_json
  end

  get "/users/:id" do
    user = User.find(params[:id])
    user.to_json
  end

  post "/users" do
    newUser = User.create(name: params[:name], password: params[:password])
    newUser.to_json
  end

  get "/parks/acadia" do 
    display all acadia info
    display acadia pictures 
  end

end

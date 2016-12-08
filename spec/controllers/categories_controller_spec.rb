require "rails_helper"

RSpec.describe CategoriesController, type: :controller do
  describe "GET #index authentication fails" do
    it "responds with an HTTP 302 status code" do
      get :index
      expect(response.status).to eq(302)
    end
  end
end

RSpec.describe CategoriesController, type: :controller do
  before(:each) do
    login_user
  end
  describe "GET #index" do
    it "reponds with an HTTP 2XX status code" do
      get :index
      expect(response.status).to eq(200)
    end
    it "responds with some data" do
      Category.create! title: "a title", user_id: @user.id
      debugger
      get :index
      expect(response.status).to eq(200)
    end
  end
end

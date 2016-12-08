require "rails_helper"

RSpec.describe TodosController, :type => :controller do
  describe "GET #index" do
    it "responds with an HTTP 403 status code" do
      get :index, category_id: 1
      expect(response.status).to eq(302)
    end

  end
end

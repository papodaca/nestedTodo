class CategoriesController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  def index
    @categories = current_user.categories.all
  end

  def show
    category = Category.find(params[:id])
    if !category
      render :nothing, :status => 404
    elsif category.user_id != current_user.id
      render :nothing, :status => 403
    end
    @category = category
  end

  def create
    if !params[:title]
      render :nothing => true, :status => 400
    end
    @category = Category.create! title: params[:title], user_id: current_user.id
  end

  def update
    category = Category.find(params[:id])
    if !category
      render :nothing => true, :status => 404
    elsif category.user_id != current_user.id
      render :nothing, :status => 403
    end
    category.title = params[:title] || category.title
    category.save()
    @category = category
  end

  def destroy
    category = Category.find(params[:id])
    if !category
      render :nothing => true, :status => 404
    elsif category.user_id != current_user.id
      render :nothing, :status => 403
    end
    category.destroy()
    render :nothing => true, :status => 200
  end
end

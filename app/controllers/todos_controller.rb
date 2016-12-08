class TodosController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  def index
    @todos = Category.find(params[:category_id]).todos.all
  end

  def create
    if !params[:title]
      render :nothing => true, :status => 400
    end
    @todo = Todo.create! title: params[:title], complete: false, archived: false, user_id: current_user.id, category_id: params[:category_id]
  end

  def update
    todo = Todo.find(params[:id])
    if !todo
      render :nothing => true, :status => 404
    end
    todo.title = params[:title] || todo.title
    todo.complete = params[:complete] || todo.complete
    todo.archived = params[:archived] || todo.archived
    todo.save()
    @todo = todo
  end

  def destroy
    todo = Todo.find(params[:id])
    if !todo
      render :nothing => true, :status => 404
    end
    todo.destroy()
    render :nothing => true, :status => 200
  end
end

object @category
attributes :id, :title, :created_at, :updated_at

child :todos do
  extends "todos/index"
end

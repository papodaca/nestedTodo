/* eslint-disable import/prefer-default-export */

import api from '../api/categoriesApi'
import * as ActionTypes from '../constants/categoryConstants';

export const getAllCategoriesSuccess = (categories) => ({
  type: ActionTypes.GET_ALL_CATEGORIES_SUCCESS,
  categories,
});

export const getAllCategoriesError = (error) => ({
  type: ActionTypes.GET_ALL_CATEGORIES_ERROR,
  error,
});

export const updateCategoriesSuccess = (category) => ({
  type: ActionTypes.UPDATE_CATEGORIES_SUCCESS,
  category,
});

export const updateCategoriesError = (error) => ({
  type: ActionTypes.UPDATE_CATEGORIES_ERROR,
  error,
});

export const createCategoriesSuccess = (category) => ({
  type: ActionTypes.CREATE_CATEGORIES_SUCCESS,
  category,
});

export const createCategoriesError = (error) => ({
  type: ActionTypes.CREATE_CATEGORIES_ERROR,
  error,
});

export const destroyCategoriesSuccess = (category) => ({
  type: ActionTypes.DESTROY_CATEGORIES_SUCCESS,
  category,
});

export const destroyCategoriesError = (error) => ({
  type: ActionTypes.DESTROY_CATEGORIES_ERROR,
  error,
});

export const updateTodosSuccess = (category, todo) => ({
  type:ActionTypes.UPDATE_TODO_SUCCESS,
  category,
  todo
});

export const updateTodosError = (error) => ({
  type:ActionTypes.UPDATE_TODO_ERROR,
  error
});

export const createTodosSuccess = (category, todo) => ({
  type:ActionTypes.CREATE_TODO_SUCCESS,
  category,
  todo
});

export const createTodosError = (error) => ({
  type:ActionTypes.CREATE_TODO_ERROR,
  error
});

export const destroyTodosSuccess = (category, todo) => ({
  type:ActionTypes.DESTROY_TODO_SUCCESS,
  category,
  todo
});

export const destroyTodosError = (error) => ({
  type:ActionTypes.DESTROY_TODO_ERROR,
  error
});

export function loadCategories() {
  return (dispatch) => {
    return api.all()
      .then(users => dispatch(getAllCategoriesSuccess(users)))
      .catch(error => dispatch(getAllCategoriesError(error)));
  };
}

export function updateCategory(category) {
  return (dispatch) => {
    return api.update(category)
      .then(category => dispatch(updateCategoriesSuccess(category)))
      .catch(error => dispatch(updateCategoriesError(error)));
  };
}

export function createCategory(category) {
  return (dispatch) => {
    return api.create(category)
      .then(category => dispatch(createCategoriesSuccess(category)))
      .catch(error => dispatch(createCategoriesError(error)));
  };
}

export function destroyCategory(category) {
  return (dispatch) => {
    return api.destroy(category)
      .then(() => dispatch(destroyCategoriesSuccess(category)))
      .catch(error => dispatch(destroyCategoriesError(error)));
  };
}

export function updateTodo(category, todo) {
  return (dispatch) => {
    return api.updateTodo(category, todo)
      .then(updatedTodo => dispatch(updateTodosSuccess(category, updatedTodo)))
      .catch(error => dispatch(updateTodosError(error)));
  };
}

export function createTodo(category, todo) {
  return (dispatch) => {
    return api.createTodo(category, todo)
      .then(newTodo => dispatch(createTodosSuccess(category, newTodo)))
      .catch(error => dispatch(createTodosError(error)));
  };
}

export function destroyTodo(category, todo) {
  return (dispatch) => {
    return api.destroyTodo(category, todo)
      .then(() => dispatch(destroyTodosSuccess(category, todo)))
      .catch(error => dispatch(destroyTodosError(error)));
  };
}

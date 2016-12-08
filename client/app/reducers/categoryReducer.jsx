import genericReducer from './genericReducer';
import * as actionTypes from '../constants/categoryConstants';

const GET_ALL_CATEGORIES_SUCCESS = actionTypes.GET_ALL_CATEGORIES_SUCCESS;
const GET_ALL_CATEGORIES_ERROR = actionTypes.GET_ALL_CATEGORIES_ERROR;
const CREATE_CATEGORIES_SUCCESS = actionTypes.CREATE_CATEGORIES_SUCCESS;
const CREATE_CATEGORIES_ERROR = actionTypes.CREATE_CATEGORIES_ERROR;
const UPDATE_CATEGORIES_SUCCESS = actionTypes.UPDATE_CATEGORIES_SUCCESS;
const UPDATE_CATEGORIES_ERROR = actionTypes.UPDATE_CATEGORIES_ERROR;
const DESTROY_CATEGORIES_SUCCESS = actionTypes.DESTROY_CATEGORIES_SUCCESS;
const DESTROY_CATEGORIES_ERROR = actionTypes.DESTROY_CATEGORIES_ERROR;
const CREATE_TODO_SUCCESS = actionTypes.CREATE_TODO_SUCCESS;
const CREATE_TODO_ERROR = actionTypes.CREATE_TODO_ERROR;
const UPDATE_TODO_SUCCESS = actionTypes.UPDATE_TODO_SUCCESS;
const UPDATE_TODO_ERROR = actionTypes.UPDATE_TODO_ERROR;
const DESTROY_TODO_SUCCESS = actionTypes.DESTROY_TODO_SUCCESS;
const DESTROY_TODO_ERROR = actionTypes.DESTROY_TODO_ERROR;

const handleError = (state = {}, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const actionHandlers = {
  GET_ALL_CATEGORIES_SUCCESS: (state = {}, action) => {
    return {
      ...state,
      categories: action.categories,
    };
  },
  GET_ALL_CATEGORIES_ERROR: handleError,
  CREATE_CATEGORIES_SUCCESS: (state = {}, action) => {
    return {
      ...state,
      categories: [
        ...state.categories,
        action.category
      ],
    };
  },
  CREATE_CATEGORIES_ERROR: handleError,
  UPDATE_CATEGORIES_SUCCESS: (state = {}, action) => {
    let thisCategory = state.categories.find(cat => cat.id === action.category.id);
    let idx = state.categories.indexOf(thisCategory);
    let categories = [
      ...state.categories
    ];
    categories.splice(idx, 1, action.category);
    return {
      ...state,
      categories
    };
  },
  UPDATE_CATEGORIES_ERROR: handleError,
  DESTROY_CATEGORIES_SUCCESS: (state = {}, action) => {
    let thisCategory = state.categories.find(cat => cat.id === action.category.id);
    let idx = state.categories.indexOf(thisCategory);
    let categories = [
      ...state.categories
    ];
    categories.splice(idx, 1);
    return {
      ...state,
      categories
    };
  },
  DESTROY_CATEGORIES_ERROR: handleError,
  CREATE_TODO_SUCCESS: function(state = {}, action) {
    let thisCategory = state.categories.find(cat => cat.id === action.category.id);
    let idx = state.categories.indexOf(thisCategory);
    let categories = [
      ...state.categories
    ];
    let category = {
      ...categories[idx],
      todos: [
        ...categories[idx].todos,
        action.todo
      ]
    };
    categories.splice(idx,1,category);
    return {
      ...state,
      categories
    }
  },
  CREATE_TODO_ERROR: handleError,
  UPDATE_TODO_SUCCESS: function(state = {}, action) {
    let thisCategory = state.categories.find(cat => cat.id === action.category.id);
    let idx = state.categories.indexOf(thisCategory);
    let thisTodo = state.categories[idx].todos.find(to => to.id === action.todo.id);
    let todoIdx = state.categories[idx].todos.indexOf(thisTodo);
    let categories = [
      ...state.categories
    ];
    let category = {
      ...categories[idx],
      todos: [
        ...categories[idx].todos,
      ]
    };
    category.todos.splice(todoIdx,1,action.todo);
    categories.splice(idx,1,category);
    return {
      ...state,
      categories
    }
  },
  UPDATE_TODO_ERROR: handleError,
  DESTROY_TODO_SUCCESS: function(state = {}, action) {
    let thisCategory = state.categories.find(cat => cat.id === action.category.id);
    let idx = state.categories.indexOf(thisCategory);
    let thisTodo = state.categories[idx].todos.find(to => to.id === action.todo.id);
    let todoIdx = state.categories[idx].todos.indexOf(thisTodo);
    let categories = [
      ...state.categories
    ];
    let category = {
      ...categories[idx],
      todos: [
        ...categories[idx].todos,
      ]
    };
    category.todos.splice(todoIdx,1);
    categories.splice(idx,1,category);
    return {
      ...state,
      categories
    }
  },
  DESTROY_TODO_ERROR: handleError
};

const categories = genericReducer(actionHandlers, {});

export default categories;

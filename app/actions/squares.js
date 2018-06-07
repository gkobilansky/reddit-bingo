import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return { type: types.ADD_SQUARE, text };
}

export function deleteTodo(id) {
  return { type: types.DELETE_SQUARE, id };
}

export function editTodo(id, text) {
  return { type: types.EDIT_SQUARE, id, text };
}

export function matchSquare(id) {
  return { type: types.MATCH_SQUARE, id };
}

export function matchAll() {
  return { type: types.MATCH_ALL };
}

export function clearMatched() {
  return { type: types.CLEAR_MATCHED };
}

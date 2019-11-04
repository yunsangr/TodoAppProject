import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  EDIT_DONE,
  DELETE_DONE_TODO,
  DELETE_UNDONE_TODO,
  DELETE_ALL_TODO,
  SHOW_DONE_TODO,
  SHOW_UNDONE_TODO,
  SHOW_ALL_TODO,
  UNDO_TODO,
  REDO_TODO,
  APP_START,
  APP_EXIT,
} from './actionTypes';
const date = new Date();
let nextId = date.getTime();
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextId++,
  text,
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
export const deleteTodo = (id, deleteBoolean) => ({
  type: DELETE_TODO,
  id,
  deleteBoolean,
});

export const editTodo = id => ({
  type: EDIT_TODO,
  id,
});
export const editDone = (id, text) => ({
  type: EDIT_DONE,
  id,
  text,
});
export const deleteDoneTodo = () => ({
  type: DELETE_DONE_TODO,
});
export const deleteUnDoneTodo = () => ({
  type: DELETE_UNDONE_TODO,
});
export const deleteAllTodo = () => ({
  type: DELETE_ALL_TODO,
});
export const showDoneTodo = () => ({
  type: SHOW_DONE_TODO,
});
export const showUnDoneTodo = () => ({
  type: SHOW_UNDONE_TODO,
});
export const showAllTodo = () => ({
  type: SHOW_ALL_TODO,
});
export const undoTodo = () => ({
  type: UNDO_TODO,
});
export const redoTodo = () => ({
  type: REDO_TODO,
});
export const startApp = initialState => ({
  type: APP_START,
  initialState,
});
export const exitApp = () => ({
  type: APP_EXIT,
});

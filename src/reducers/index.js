import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import deleteTodo from './deleteTodo';
import editTodo from './editTodo';
import editDone from './editDone';
import deleteDoneTodo from './deleteDoneTodo';
import deleteUnDoneTodo from './deleteUnDoneTodo';
export default combineReducers({
  todos,
  visibilityFilter,
  deleteTodo,
  editTodo,
  editDone,
  deleteDoneTodo,
  deleteUnDoneTodo,
});

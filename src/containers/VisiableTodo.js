import {connect} from 'react-redux';
import TodoList from '../components/TodoList';
import {
  deleteTodo,
  toggleTodo,
  editTodo,
  editDone,
  deleteDoneTodo,
} from '../actions';

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: (id, deleteBoolean) => dispatch(deleteTodo(id, deleteBoolean)),
  editTodo: id => dispatch(editTodo(id)),
  editDone: (id, text) => dispatch(editDone(id, text)),
  deleteDoneTodo: () => dispatch(deleteDoneTodo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

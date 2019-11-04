import {Alert} from 'react-native';
import history from '../store/stateHistory';
import AsyncStorage from '@react-native-community/async-storage';
const todos = (state = [], action) => {
  console.log(action.type);
  if (action.type === 'APP_EXIT') {
    const stringState = JSON.stringify(state);
    AsyncStorage.setItem('@todos', stringState);
    return state;
  }

  if (action.type === 'APP_START') {
    return JSON.parse(action.initialState);
  }

  switch (action.type) {
    case 'ADD_TODO':
      history.preState = state;
    case 'DELETE_TODO':
      history.preState = state;
    case 'DELETE_DONE_TODO':
      history.preState = state;
    case 'DELETE_UNDONE_TODO':
      history.preState = state;
    case 'DELETE_ALL_TODO':
      history.preState = state;
    case 'TOGGLE_TODO':
      history.preState = state;
    case 'UNDO_STATE':
      history.preState = state;
    default:
      break;
  }
  switch (action.type) {
    case 'TOGGLE_THEME':
      console.log('dispatched well!');
      return state;
    case 'REDO_TODO':
      return history.futureState;
    case 'UNDO_TODO':
      history.futureState = state;
      console.log('undoing', history);
      return history.preState;
    case 'ADD_TODO':
      if (action.text === '') {
        Alert.alert(
          'Empty Todo',
          'Cannot add an empty todo.',
          [
            {
              text: 'Close',
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
        return state;
      }
      return [
        {
          id: action.id,
          text: action.text,
          completed: false,
          editing: false,
          show: true,
        },
        ...state,
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    case 'DELETE_TODO':
      if (action.deleteBoolean) {
        return state.filter(todo => todo.id != action.id);
      } else {
        return state;
      }
    case 'DELETE_DONE_TODO':
      return state.filter(todo => todo.completed === false);
    case 'DELETE_UNDONE_TODO':
      return state.filter(todo => todo.completed === true);
    case 'DELETE_ALL_TODO':
      return [];
    case 'SHOW_DONE_TODO':
      return state.map(todo =>
        todo.completed ? {...todo, show: true} : {...todo, show: false},
      );
    case 'SHOW_UNDONE_TODO':
      return state.map(todo =>
        !todo.completed ? {...todo, show: true} : {...todo, show: false},
      );
    case 'SHOW_ALL_TODO':
      return state.map(todo => ({...todo, show: true}));
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo, editing: !todo.editing} : todo,
      );
    case 'EDIT_DONE':
      if (action.text === '') {
        return state.map(todo =>
          todo.id === action.id ? {...todo, editing: !todo.editing} : todo,
        );
      }
      return state.map(todo =>
        todo.id === action.id
          ? {...todo, editing: !todo.editing, text: action.text}
          : todo,
      );
    default:
      return state;
  }
};
export default todos;

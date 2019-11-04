import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Alert} from 'react-native';
import {
  DARK_FONT_DONE,
  DARK_FONT_UNDONE,
  DARK_WHITE,
  EDIT_ICON,
} from '../themes/dark';

function handleDelete(todo, deleteTodo) {
  Alert.alert(
    'Delete',
    'Are you sure to delete? Once deleted, you can undo it only once.',
    [
      {text: 'Yes', onPress: () => deleteTodo(todo.id, true)},
      {text: 'No', onPress: () => deleteTodo(todo.id, false)},
    ],
  );
}

function todoTrash(todo, deleteTodo) {
  return (
    <TouchableOpacity
      style={{justifyContent: 'center', flex: 0.1}}
      onPress={() => handleDelete(todo, deleteTodo)}>
      <Text
        style={{
          fontSize: 15,
          padding: 5,
        }}>
        🗑
      </Text>
    </TouchableOpacity>
  );
}

function handleEditDone(todo, _editDone, text) {
  Alert.alert(
    'Change todo',
    'Are you sure to change your todo? Once changed, you can undo it only once',
    [
      {text: 'Yes', onPress: () => _editDone(todo.id, text)},
      {text: 'No', onPress: () => _editDone(todo.id, '')},
    ],
  );
}

class EditTodo extends Component {
  state = {
    text: '',
  };
  render() {
    const {todo, _editDone} = this.props;
    return (
      <View style={styles.todoStyle}>
        <TextInput
          placeholder="Editing..."
          onChangeText={text => this.setState({text})}
          multiline={true}
          value={this.state.text}
          style={{flex: 0.96}}
        />
        <TouchableOpacity
          style={{justifyContent: 'center', flex: 0.1}}
          onPress={() => handleEditDone(todo, _editDone, this.state.text)}>
          <Text
            style={{
              fontSize: 23,
              padding: 5,
            }}>
            ✔
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class ViewTodo extends Component {
  state = {
    text: '',
  };
  render() {
    const {todo, deleteTodo, editTodo} = this.props;
    return (
      <View style={[{borderBottomColor: DARK_WHITE}, styles.todoStyle]}>
        <Text
          style={{
            fontSize: 24,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? DARK_FONT_DONE : DARK_FONT_UNDONE,
            flex: 0.96,
          }}>
          {todo.text}
        </Text>

        <TouchableOpacity
          style={{justifyContent: 'center', flex: 0.1}}
          onPress={() => editTodo(todo.id)}>
          <Text
            style={{
              fontSize: 23,
              padding: 5,
              color: EDIT_ICON,
            }}>
            ✎
          </Text>
        </TouchableOpacity>
        {todoTrash(todo, deleteTodo)}
      </View>
    );
  }
}

class TodoList extends Component {
  state = {
    editingText: '',
  };

  _editDone = (id, newText) => {
    this.props.editDone(id, newText);
    this.setState({editingText: newText});
  };

  render() {
    const {todos, toggleTodo, deleteTodo, editTodo} = this.props;
    return (
      <ScrollView style={styles.todoList}>
        {todos
          .filter(todo => todo.show)
          .map(todo => (
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
              {todo.editing ? (
                <EditTodo todo={todo} _editDone={this._editDone.bind(this)} />
              ) : (
                <ViewTodo
                  todo={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )}
            </TouchableOpacity>
          ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoList: {
    padding: 20,
  },
  todoStyle: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
});

export default TodoList;

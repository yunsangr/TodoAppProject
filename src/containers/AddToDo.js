import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {DARK_WHITE} from '../themes/dark';

class AddTodo extends Component {
  state = {
    text: '',
    nightMode: this.props.mode,
  };

  addTodo = text => {
    //update the redux store'
    this.props.dispatch(addTodo(text));
    this.setState({text: ''});
  };
  render() {
    return (
      <View style={[{borderColor: DARK_WHITE}, styles.addToDo]}>
        <TextInput
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          style={[{borderColor: DARK_WHITE}, styles.addToDoInput]}
          placeholder="add your todo here"
          color={DARK_WHITE}
          placeholderTextColor={DARK_WHITE}
          autoFocus={true}
          onSubmitEditing={() => this.addTodo(this.state.text)}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.myIcon}>
            <Text style={[{color: DARK_WHITE}, styles.addIcon]}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addToDo: {
    flexDirection: 'row',
    marginHorizontal: 20,
    borderWidth: 1,
  },
  addToDoInput: {
    height: 50,
    flex: 1,
    padding: 5,
  },
  myIcon: {
    height: 50,
    justifyContent: 'center',
  },
  addIcon: {
    fontSize: 30,
    paddingHorizontal: 10,
    padding: 5,
  },
});
export default connect()(AddTodo);

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './containers/AddToDo';
import VisiableTodo from './containers/VisiableTodo';
import OptionButtons from './components/OptionButtons';
import AboutModal from './components/AboutModal';
import ShowAllModal from './components/ShowAllModal';
import {startApp} from './actions';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {DARK_BACKGROUND} from '../src/themes/dark.js';
class TodoApp extends Component {
  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS',
    modalVisible: false,
    aboutModalVisible: false,
    showVisible: false,
    nightMode: false,
  };

  _forceRender = () => {
    this.setState({nightMode: !this.state.nightMode});
  };

  _loadInitialState = async () => {
    try {
      let value = await AsyncStorage.getItem('@todos');
      if (value !== null) {
        this.props.dispatch(startApp(value));
      } else {
        console.log('Initialized with no selection on disk.');
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  };

  componentDidMount(): void {
    this._loadInitialState().done();
  }

  showAboutModal = visible => {
    this.setState({aboutModalVisible: visible});
  };

  showShowModal = visible => {
    this.setState({showVisible: visible});
  };

  render() {
    return (
      <View style={[{backgroundColor: DARK_BACKGROUND}, styles.container]}>
        <AboutModal
          show={this.state.aboutModalVisible}
          showAboutModal={this.showAboutModal.bind(this)}
        />

        <ShowAllModal
          show={this.state.showVisible}
          showDeleteAllModal={this.showShowModal.bind(this)}
        />

        <AddTodo mode={this.state.nightMode} />
        <VisiableTodo />
        <OptionButtons
          forceRender={this._forceRender.bind(this)}
          showShowModal={this.showShowModal.bind(this)}
          showAboutModal={this.showAboutModal.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
});
export default connect()(TodoApp);

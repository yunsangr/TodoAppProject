import React, {Component} from 'react';
import {
  Modal,
  Text,
  Picker,
  View,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {
  showDoneTodo,
  showUnDoneTodo,
  showAllTodo,
  deleteDoneTodo,
  deleteUnDoneTodo,
  deleteAllTodo,
  undoTodo,
  redoTodo,
  exitApp,
} from '../actions';

class ShowAllModal extends Component {
  state = {
    show: this.props.show,
    whatToDelete: 'all',
  };

  closeModal = () => {
    this.props.showDeleteAllModal(false);
    this.props.dispatch(exitApp());
  };

  showAllTodos = () => {
    if (this.state.whatToDelete === 'Done') {
      this.props.dispatch(showDoneTodo());
    } else if (this.state.whatToDelete === 'unDone') {
      this.props.dispatch(showUnDoneTodo());
    } else if (this.state.whatToDelete == 'all') {
      this.props.dispatch(showAllTodo());
    }
  };

  deleteHelper = () => {
    if (this.state.whatToDelete === 'Done') {
      this.props.dispatch(deleteDoneTodo());
    } else if (this.state.whatToDelete === 'unDone') {
      this.props.dispatch(deleteUnDoneTodo());
    } else if (this.state.whatToDelete === 'all') {
      this.props.dispatch(deleteAllTodo());
    }
  };

  deleteAllTodos = () => {
    Alert.alert(
      'Delete',
      'Are you sure to delete? Once deleted, you can undo it only once.',
      [
        {text: 'Yes', onPress: () => this.deleteHelper()},

        {text: 'Cancel', onPress: () => this.closeModal()},
      ],
    );
  };

  setWhatToDeleteState = whatToDelete => {
    this.setState({whatToDelete: whatToDelete});
  };

  undoState = () => {
    this.props.dispatch(undoTodo());
  };

  redoState = () => {
    this.props.dispatch(redoTodo());
  };

  render() {
    const {show} = this.props;
    this.showAllTodos();
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <Text
            style={{marginHorizontal: 50, fontSize: 20, textAlign: 'center'}}>
            View Option
          </Text>
          <Picker
            selectedValue={this.state.whatToDelete}
            style={{height: 50, flex: 0.7}}
            onValueChange={(itemValue, itemIndex) =>
              this.setWhatToDeleteState(itemValue)
            }>
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Done" value="Done" />
            <Picker.Item label="Undone" value="unDone" />
          </Picker>
          <Button
            color="#9C000B"
            title={'Delete'}
            onPress={() => this.deleteAllTodos()}
          />
          <Button
            color="#6C6C6C"
            title={'Undo'}
            onPress={() => this.undoState()}
          />
          <Button
            color="#6C6C6C"
            title={'Redo'}
            onPress={() => this.redoState()}
          />
          <Button title={'Save'} onPress={() => this.closeModal()} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(192,192,192,0.86)',
    marginTop: 250,
    maxHeight: 450,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: '#bababa'
  },
});

export default connect()(ShowAllModal);

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
import {deleteDoneTodo, deleteUnDoneTodo, deleteAllTodo} from '../actions';

class DeleteAllModal extends Component {
  state = {
    show: this.props.show,
    whatToDelete: 'unDone',
  };
  closeModal = () => {
    this.props.showDeleteAllModal(false);
  };

  deleteHelper = () => {
    if (this.state.whatToDelete === 'Done') {
      this.props.dispatch(deleteDoneTodo());
    } else if (this.state.whatToDelete === 'unDone') {
      this.props.dispatch(deleteUnDoneTodo());
    } else if (this.state.whatToDelete == 'all') {
      this.props.dispatch(deleteAllTodo());
    }
  };

  deleteAllTodos = () => {
    Alert.alert(
      'Delete',
      'Are you sure to delete? Once deleted, you cannot undo it',
      [
        {text: 'Yes', onPress: () => this.deleteHelper()},

        {text: 'Cancel', onPress: () => this.closeModal()},
      ],
    );
  };

  setWhatToDeleteState = whatToDelete => {
    this.setState({whatToDelete: whatToDelete});
  };

  render() {
    const {show} = this.props;
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
            Delete Option
          </Text>
          <Picker
            selectedValue={this.state.whatToDelete}
            style={{height: 50, flex: 0.7}}
            onValueChange={(itemValue, itemIndex) =>
              this.setWhatToDeleteState(itemValue)
            }>
            <Picker.Item label="Undone" value="unDone" />
            <Picker.Item label="Done" value="Done" />
            <Picker.Item label="All" value="all" />
          </Picker>
          <Button title={'Delete'} onPress={() => this.deleteAllTodos()} />
          <Button title={'Close'} onPress={() => this.closeModal()} />
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
    backgroundColor: 'rgba(241,241,241,0.95)',
    marginTop: 250,
    maxHeight: 600,
    borderRadius: 70,
  },
});

export default connect()(DeleteAllModal);

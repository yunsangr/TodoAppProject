import React, {Component} from 'react';
import {Modal, Text, View, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';

class AboutModal extends Component {
  state = {
    show: this.props.show,
  };
  closeModal = () => {
    this.props.showAboutModal(false);
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
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontStyle: 'italic',
              fontWeight: 'bold',
            }}>
            사용
          </Text>
          <Text style={styles.textStyle}>
            1. 새로운 할 일들을 추가 해보세요.
          </Text>
          <Text style={styles.textStyle}>2. 나의 투두를 수정해보세요.</Text>
          <Text style={styles.textStyle}>
            3. 지우고 싶은 투두를 삭제해보세요.
          </Text>
          <Text style={styles.textStyle}>4. 나이트모드를 사용해보세요.</Text>
          <Text style={styles.textStyle}>5. 보기 옵션들을 사용해보세요.</Text>
          <Text style={styles.textStyle}>
            6. 위에 기능 잘못 사용하셨다면 되돌리기 기능을 사용해 보세요.
          </Text>

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
    backgroundColor: 'rgba(192,192,192,0.86)',
    marginTop: 250,
    maxHeight: 350,
    minWidth: 250,
    borderRadius: 70,
  },
  textStyle: {
    textAlign: 'center',
    padding: 10,
    fontStyle: 'italic',
  },
});

export default connect()(AboutModal);

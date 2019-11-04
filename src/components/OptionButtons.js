import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {DARK_BOTTOM_BACKGROUND, DARK_ADD_ICON} from '../themes/dark';
import {toggleTheme as toggleThemeMode} from '../themes/dark';

class OptionButtons extends Component {
  state = {
    nightMode: true,
  };
  popUpAboutModal = () => {
    this.props.showAboutModal(true);
  };

  popUpShowModal = () => {
    this.props.showShowModal(true);
  };

  toggleThemeMode = () => {
    this.setState({nightMode: !this.state.nightMode});
    this.props.forceRender();
    toggleThemeMode(this.state.nightMode);
  };

  render() {
    const {nightMode} = this.state;
    return (
      <View
        style={[
          {backgroundColor: DARK_BOTTOM_BACKGROUND},
          styles.optionButtons,
        ]}>
        <Button
          color={DARK_ADD_ICON}
          title={'Option'}
          onPress={() => this.popUpShowModal()}
        />
        <Button
          color={DARK_ADD_ICON}
          title={nightMode ? 'Night' : 'Day'}
          onPress={() => this.toggleThemeMode()}
        />
        <Button
          color={DARK_ADD_ICON}
          title={'About'}
          onPress={() => this.popUpAboutModal()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionButtons: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});
export default OptionButtons;

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as ScreenStyles from '../themes/default/screens';

export default class ScreenQuiz extends Component {
  render() {
    return (
      <View>
        <Text>This is the screen quiz.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles
  }
})

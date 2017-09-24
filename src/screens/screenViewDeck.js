import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyDeck from '../components/deck/myDeck';
import * as ScreenStyles from '../themes/default/screens';

export default class ScreenViewDeck extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>This is the screen view deck.</Text>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles
  }
})

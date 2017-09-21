import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MyDeck from '../components/deck/myDeck';

export default class ScreenDecks extends Component {
  render() {
    return (
      <View>
        <Text>This is the screen decks.</Text>
        <MyDeck />
      </View>
    )
  }
}

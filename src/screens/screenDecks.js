import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MyDeck from '../components/deck/myDeck';
import * as ScreenStyles from '../themes/default/screens';

export default class ScreenDecks extends Component {
  render() {
    let decks = [];
    for(let i=0; i<10; i++) {
      decks.push({
        key: 'deck'+i,
        name: 'Ben Deck'
      });
    }
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Choose a deck:</Text>
        </View>
        <View style={styles.decks}>
          <FlatList
            data={decks}
            renderItem={({item}) => <View style={styles.deck}>
              <MyDeck {...item} />
            </View>}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20
  },
  decks: {
    flex: 1
  },
  deck: {
    flex: 1,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
})

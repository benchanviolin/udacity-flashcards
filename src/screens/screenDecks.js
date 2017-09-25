import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MyDeck from '../components/deck/myDeck';
import * as ScreenStyles from '../themes/default/screens';
import sortBy from 'sort-by';

class ScreenDecks extends Component {
  render() {
    let { decks } = this.props;
    if (decks) {
      decks.sort(sortBy('title'));
      decks = decks.map((deck, key) => {
        deck.key = key;
        deck.num = key+1;
        return deck;
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
            renderItem={({ item }) => <TouchableOpacity
              style={styles.deck}
              onPress={() => this.props.navigation.navigate(
              'ViewDeck',
              { item }
            )}>
                <MyDeck {...item} />
              </TouchableOpacity>}
          />
        </View>
      </View>
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps
)(ScreenDecks)

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

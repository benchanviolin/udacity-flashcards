import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MyDeck from '../components/deck/myDeck';
import * as ScreenStyles from '../themes/default/screens';

class ScreenDecks extends Component {
  render() {
    let { decks } = this.props;

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

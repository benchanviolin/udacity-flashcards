import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ScreenStyles from '../themes/default/screens';
import * as cardToDeck from '../utils/cardToDeck.js';

class ScreenViewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  render() {
    const { id } = this.props.navigation.state.params;
    const { decks, cards } = this.props;
    let deck = null;
    if (decks) {
      deck = decks.filter(deck => deck.id === id)[0];
      deck.cards = cards ? cards.filter(card => cardToDeck.doesCardBelongToDeck(card, deck)) : [];
    }

    return (
      <View style={styles.screen}>
        {deck
        ? <View style={styles.header}>
            <Text style={styles.headerText}>{deck.title}</Text>
            <Text style={styles.headerText}>{cardToDeck.showNumberOfCards(deck.cards.length)}</Text>
          </View>
        : <Text>Loading...</Text>
        }
      </View>
    )
  }
}

function mapStateToProps ({ decks, cards }) {
  return {
    decks,
    cards
  }
}

export default connect(
  mapStateToProps
)(ScreenViewDeck)

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles,
    justifyContent: 'flex-start'
  },
  header: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20
  }
})

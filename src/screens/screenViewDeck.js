import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ScreenStyles from '../themes/default/screens';
import * as CardToDeck from '../utils/cardToDeck.js';
import PrimaryButton from '../components/buttons/primaryButton';
import SubmitButton from '../components/buttons/submitButton';

class ScreenViewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  pressNewCard = () => {
    console.log('new card');
  }
  pressStartQuiz = () => {
    console.log('start quiz');
  }
  render() {
    const { id } = this.props.navigation.state.params;
    const { decks, cards } = this.props;
    let deck = null;
    if (decks) {
      deck = decks.filter(deck => deck.id === id)[0];
      deck.cards = cards ? cards.filter(card => CardToDeck.doesCardBelongToDeck(card, deck)) : [];
    }

    return (
      <View style={styles.screen}>
        {deck
        ? <View style={styles.wrap}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{deck.title}</Text>
              <Text style={styles.headerText}>{CardToDeck.showNumberOfCards(deck.cards.length)}</Text>
            </View>
            <View style={styles.buttons}>
              <SubmitButton
                title="New Card"
                onPress={this.pressNewCard}
              />
              <PrimaryButton
                title="Start Quiz"
                onPress={this.pressStartQuiz}
              />
            </View>
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
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  headerText: {
    fontSize: 20
  },
  buttons: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 50
  }
})

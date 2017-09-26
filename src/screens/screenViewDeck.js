import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ScreenStyles from '../themes/default/screens';
import * as CardToDeck from '../utils/cardToDeck.js';
import PrimaryButton from '../components/buttons/primaryButton';
import SubmitButton from '../components/buttons/submitButton';
import { setActiveDeck } from '../components/deck/activeDeckActions';

class ScreenViewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  componentDidMount() {
    this.reloadActiveDeck();
  }
  reloadActiveDeck = () => {
    const { id } = this.props.navigation.state.params;
    const { decks, cards } = this.props;
    let activeDeck = null;
    if (decks) {
      activeDeck = decks.filter(deck => deck.id === id)[0];
      activeDeck.cards = cards ? cards.filter(card => CardToDeck.doesCardBelongToDeck(card, deck)) : [];
      this.props.setActiveDeck(activeDeck);
    }
  }
  pressCreateNewQuestion = () => {
    console.log('create new question');
    this.props.navigation.navigate(
      'AddCard'
    );
  }
  pressStartAQuiz = () => {
    console.log('start a quiz');
  }
  render() {
    const { id } = this.props.navigation.state.params;
    const { activeDeck } = this.props;
    if (!activeDeck) {
      return (
        <View style={styles.screen}>
          <Text>Loading... please wait.</Text>
        </View>
      )
    }

    return (
      <View style={styles.screen}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{activeDeck.title}</Text>
            <Text style={styles.headerText}>{CardToDeck.showNumberOfCards(activeDeck.cards.length)}</Text>
          </View>
          <View style={styles.buttons}>
            <SubmitButton
              title="Create New Question"
              onPress={this.pressCreateNewQuestion}
            />
            <PrimaryButton
              title="Start a Quiz"
              onPress={this.pressStartAQuiz}
            />
          </View>
        </View>
      </View>
    )
  }
}

function mapStateToProps ({ decks, activeDeck, cards }) {
  return {
    decks,
    activeDeck,
    cards
  }
}

function mapDispatchToProps (dispatch) {
  return {
    setActiveDeck: (deck) => dispatch(setActiveDeck(deck))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenViewDeck)

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles.screen,
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

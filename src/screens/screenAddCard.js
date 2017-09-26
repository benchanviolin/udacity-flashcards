import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as ScreenStyles from '../themes/default/screens';
import SubmitButton from '../components/buttons/submitButton';
import { default as UUID } from 'uuid';
import { addCard } from '../components/card/cardActions';

class ScreenAddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    }
  }
  addCard = () => {
    console.log(this.state.question);
    /*const { title } = this.state;
    const id = UUID.v4();
    const timestamp = Date.now();
    const deckId = this.props.activeDeck.id;
    this.props.addDeck({ id, title, timestamp, deckId });
    this.setState({ question: "", answer: "" });
    this.props.navigation.navigate('Decks');*/
  }
  deleteAllCards = () => {
    /*this.props.deleteAllDecks();
    this.setState({ question: "" , answer: "" });
    this.props.navigation.navigate('Decks');*/
  }
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.headerText}>What is the question?</Text>
        </View>
        <View style={styles.newCard}>
          <TextInput style={styles.newCardTextInput}
            value={this.state.question}
            placeholder="Enter question here"
            onChangeText={(question) => this.setState({ question })}
          ></TextInput>
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>What is the answer?</Text>
        </View>
        <View style={styles.newCard}>
          <TextInput style={styles.newCardTextInput}
            value={this.state.answer}
            placeholder="Enter answer here"
            onChangeText={(answer) => this.setState({ answer })}
          ></TextInput>
        </View>
        <View style={styles.submitButtonWrapper}>
          <SubmitButton
            title="SUBMIT"
            onPress={this.createDeck}
          />
        </View>
        <View style={styles.deleteButtonWrapper}>
          <SubmitButton
            title="DELETE ALL CARDS"
            onPress={this.deleteAllCards}
          />
        </View>
      </View>
    )
  }
}

function mapStateToProps ({ activeDeck }) {
  return {
    activeDeck
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addCard: (card) => dispatch(addCard(card)),
    //deleteAllDecks: () => dispatch(deleteAllDecks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenAddCard)

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles.screen,
    justifyContent: 'flex-start'
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20
  },
  newCard: {
    padding: 15
  },
  newCardTextInput: {
    fontSize: 15
  },
  submitButtonWrapper: {
    alignItems: 'center'
  },
  deleteButtonWrapper: {
    position: 'absolute',
    bottom: 0
  }
})

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MyDeck from '../components/deck/myDeck';
import * as ScreenStyles from '../themes/default/screens';
import SubmitButton from '../components/buttons/submitButton';
import { default as UUID } from 'uuid';
import { addDeck, deleteAllDecks } from '../components/deck/deckActions';

class ScreenCreateDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    }
  }
  createDeck = () => {
    console.log(this.state.title);
    const { title } = this.state;
    const id = UUID.v4();
    const timestamp = Date.now();
    this.props.addDeck({ id, title, timestamp });
    this.setState({ title: "" });
    this.props.navigation.navigate('Decks');
  }
  deleteAllDecks = () => {
    this.props.deleteAllDecks();
    this.setState({ title: "" });
    this.props.navigation.navigate('Decks');
  }
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.headerText}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.newDeck}>
          <TextInput style={styles.newDeckTextInput}
            value={this.state.title}
            placeholder="Enter title here"
            onChangeText={(title) => this.setState({ title })}
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
            title="DELETE ALL DECKS"
            onPress={this.deleteAllDecks}
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

function mapDispatchToProps (dispatch) {
  return {
    addDeck: (deck) => dispatch(addDeck(deck)),
    deleteAllDecks: () => dispatch(deleteAllDecks())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenCreateDeck)

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
  newDeck: {
    padding: 15
  },
  newDeckTextInput: {
    fontSize: 15
  },
  submitButtonWrapper: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  },
  deleteButtonWrapper: {
    position: 'absolute',
    bottom: 0
  }
})

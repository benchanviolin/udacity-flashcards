import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MyDeck from '../components/deck/myDeck';
import * as ScreenStyles from '../themes/default/screens';
import SubmitButton from '../components/buttons/submitButton';
import { default as UUID } from 'uuid';
import { addDeck } from '../components/deck/deckActions';

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
    this.props.addDeck({ id, title });
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
          <SubmitButton onPress={this.createDeck} />
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
    addDeck: (deck) => dispatch(addDeck(deck))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScreenCreateDeck)

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles,
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
  }
})

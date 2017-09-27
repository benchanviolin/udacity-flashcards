import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as ScreenStyles from '../themes/default/screens';
import SubmitButton from '../components/buttons/submitButton';

const initialState = {
  cardIdOrder: [],
  cardResults: []
};

function shuffle (array) {
  let [ i, j, temp ] = [ 0, 0, null ];

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

class ScreenQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount() {
    this.reloadQuiz();
  }
  reloadQuiz = () => {
    const { activeDeck } = this.props;
    let [ cardIdOrder, cardResults ] = [ initialState.cardIdOrder.slice(0), initialState.cardResults.slice(0) ];
    activeDeck.cards.map(card => {
      cardIdOrder.push(card.id);
    });
    shuffle(cardIdOrder);
    this.setState({ cardIdOrder, cardResults });
  }
  render() {
    const { activeDeck } = this.props;
    const { cardIdOrder, cardResults } = this.state;
    const activeCard = activeDeck.cards.filter(card => card.id === cardIdOrder[cardResults.length])[0];

    return (
      <View style={styles.screen}>
        <Text>{JSON.stringify(activeCard)}</Text>
        <View style={styles.buttonWrapper}>
          <SubmitButton
            title="Reload Quiz"
            onPress={this.reloadQuiz}
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

export default connect(
  mapStateToProps
)(ScreenQuiz)

const styles = StyleSheet.create({
  screen: {
    ...ScreenStyles.styles.screen
  },
  buttonWrapper: {
    alignItems: 'center'
  },
})

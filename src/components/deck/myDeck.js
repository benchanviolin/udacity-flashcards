import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { deckBackgroundColor } from '../../themes/default/colors';

export default class MyDeck extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }
  render() {
    return (
      <View style={styles.deck}>
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: deckBackgroundColor
  }
})

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as ScreenStyles from '../themes/default/screens';

export default class ScreenViewDeck extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  }
  render() {
    const { title } = this.props.navigation.state.params.deck;

    return (
      <View style={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    )
  }
}

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
  }
})

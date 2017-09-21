import React, { Component } from 'react'
import { Text } from 'react-native'

export default class MyHistory extends Component {
  state = {
    ready: false,
  }
  componentDidMount () {
  }
  render() {
    return (
      <Text>This is the history!!</Text>
    )
  }
}

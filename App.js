import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { primaryBackgroundColor } from './src/themes/default/colors';
import { Constants } from 'expo';

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <MyStatusBar backgroundColor={primaryBackgroundColor} />
          <Text>HELLO WORLD</Text>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

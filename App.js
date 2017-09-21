import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { primaryBackgroundColor, primaryColor, highlightBackgroundColor } from './src/themes/default/colors';
import MyStatusBar from './src/navigation/myStatusBar';
import { MyNavigator } from './src/navigation/myNavigator';

export default function App ({}) {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <MyStatusBar backgroundColor={primaryBackgroundColor} />
        <MyNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

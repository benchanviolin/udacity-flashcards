import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducer from './src/store/combinedReducer';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { primaryBackgroundColor, primaryColor, highlightBackgroundColor } from './src/themes/default/colors';
import MyStatusBar from './src/navigation/myStatusBar';
import MyStore from './src/store/myStore';
import { MyNavigator } from './src/navigation/myNavigator';

export default function App ({}) {
  return (
    <Provider store={createStore(combinedReducer)}>
      <View style={styles.container}>
        <MyStore />
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

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducer';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { primaryBackgroundColor, primaryColor } from './src/themes/default/colors';
import { Constants } from 'expo';
import MyDeck from './src/components/deck/myDeck';
import MyHistory from './src/components/history/myHistory'
import { TabNavigator, StackNavigator } from 'react-navigation'

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  History: {
    screen: MyHistory,
    navigationOptions: {
      tabBarLabel: 'History',
      //tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: primaryColor,
    style: {
      height: 56,
      backgroundColor: primaryBackgroundColor,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MyNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})

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

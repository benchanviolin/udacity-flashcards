import { TabNavigator, StackNavigator } from 'react-navigation'
import MyDeck from '../components/deck/myDeck';
import ScreenDecks from '../screens/screenDecks';
import ScreenQuiz from '../screens/screenQuiz';
import { primaryBackgroundColor, primaryColor, highlightBackgroundColor } from '../themes/default/colors';

const Tabs = TabNavigator({
  Decks: {
    screen: ScreenDecks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      //tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  Quiz: {
    screen: ScreenQuiz,
    navigationOptions: {
      tabBarLabel: 'Quiz',
      //tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },

  tabBarOptions: {
    activeTintColor: primaryColor,
    indicatorStyle: {
      backgroundColor: highlightBackgroundColor,
      height: 5
    },
    style: {
      height: 58,
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

export const MyNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
})

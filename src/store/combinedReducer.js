import { combineReducers } from 'redux';
import decks from '../components/deck/deckReducer';
import cards from '../components/card/cardReducer';

export default combineReducers({
  decks,
  cards
});

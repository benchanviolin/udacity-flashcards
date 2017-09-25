import { GET_DECKS, ADD_DECK } from './deckActions.js';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DECKS:
      return state;
    case ADD_DECK:
      return state.concat([ action.deck ]);
    default:
      return state;
  }
}

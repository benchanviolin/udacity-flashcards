import { GET_DECKS } from './deckActions.js';

const initialState = [
  {
    name: 'Ben'
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DECKS:
      return state;
    default:
      return state;
  }
}

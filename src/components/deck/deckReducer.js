import { GET_DECKS } from './deckActions.js';

const initialState = [
  {
    id: 1,
    name: 'Ben'
  },
  {
    id: 2,
    name: 'Abe'
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DECKS:
      return state;
    default:
      return state;
  }
}

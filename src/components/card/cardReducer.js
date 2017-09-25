import { GET_CARDS, ADD_CARD } from './cardActions.js';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return state;
    case ADD_CARD:
      return state.concat([ action.card ]);
    default:
      return state;
  }
}

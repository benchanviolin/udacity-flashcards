export const GET_DECKS = 'GET_DECKS';

export function refreshDecks (decks) {
  return {
    type: GET_DECKS,
    decks
  }
}

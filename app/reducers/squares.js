import * as ActionTypes from '../constants/ActionTypes';

const initialState = [
  {
    text: 'Sauce?',
    matched: false,
    id: 0
  },
  {
    id: 2,
    text: 'SPLOOSH',
    matched: false
  },
  {
    id: 1,
    text: ':)',
    matched: false
  },
  {
    id: 3,
    text: '( ͡° ͜ʖ ͡°)',
    matched: false
  },
  {
    id: 4,
    text: 'SHUT UP AND TAKE MY MONEY',
    matched: false
  },
  {
    id: 5,
    text: 'In a world, where',
    matched: false
  },
  {
    id: 6,
    text: 'escalated quickly',
    matched: false
  },
  {
    id: 7,
    text: 'KILL IT WITH FIRE',
    matched: false
  },
  {
    id: 8,
    text: 'good boy',
    matched: false
  },
  {
    id: 9,
    text: 'won the internet',
    matched: false
  },
  {
    id: 10,
    text: 'CTRL+F',
    matched: false
  },
  {
    id: 11,
    text: 'tree fiddy',
    matched: false
  },
  {
    id: 12,
    text: "'murica",
    matched: false
  },
  {
    id: 13,
    text: 'gentleman and a scholar',
    matched: false
  },
  {
    id: 14,
    text: 'sprog',
    matched: false
  },
  {
    id: 15,
    text: 'relevant XKCD',
    matched: false
  },
  {
    id: 16,
    text: 'no true scotsman',
    matched: false
  },
  {
    id: 17,
    text: 'Lawyer up',
    matched: false
  },
  {
    id: 18,
    text: 'leave this here',
    matched: false
  },
  {
    id: 19,
    text: 'one does not simply',
    matched: false
  },
  {
    id: 20,
    text: '4chan leaking',
    matched: false
  },
  {
    id: 21,
    text: 'cant fap to this',
    matched: false
  },
  {
    id: 22,
    text: 'escalated quickly',
    matched: false
  },
  {
    id: 23,
    text: 'watch the world burn',
    matched: false
  },
  {
    id: 24,
    text: "I'll be in my bunk",
    matched: false
  }
];

const actionsMap = {
  [ActionTypes.ADD_SQUARE](state, action) {
    return [
      {
        id: state.reduce((maxId, square) => Math.max(square.id, maxId), -1) + 1,
        matched: false,
        text: action.text
      },
      ...state
    ];
  },
  [ActionTypes.DELETE_SQUARE](state, action) {
    return state.filter(square => square.id !== action.id);
  },
  [ActionTypes.EDIT_SQUARE](state, action) {
    return state.map(
      square =>
        square.id === action.id
          ? Object.assign({}, square, { text: action.text })
          : square
    );
  },
  [ActionTypes.MATCH_SQUARE](state, action) {
    return state.map(
      square =>
        square.id === action.id
          ? Object.assign({}, square, { matched: !square.matched })
          : square
    );
  },
  [ActionTypes.MATCH_ALL](state /*, action*/) {
    const areAllMatched = state.every(square => square.matched);
    return state.map(todo =>
      Object.assign({}, todo, {
        matched: !areAllMatched
      })
    );
  },
  [ActionTypes.CLEAR_MATCHED](state /*, action*/) {
    return state.filter(square => square.matched === false);
  }
};

export default function squares(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}

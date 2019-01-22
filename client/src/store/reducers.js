import {
  ADD_TO_FAV,
  ADD_TO_WANT_TO_WATCH,
  REMOVE_FROM_FAV,
  REMOVE_FROM_WANT_TO_WATCH,
  INIT_GLOBAL_STATES,
  TOGGLE_WANT_TO_WATCH,
  TOGGLE_FAV
} from "./actions";

const rootReducer = (state = INIT_GLOBAL_STATES, action) => {
  switch (action.type) {
    case ADD_TO_WANT_TO_WATCH:
      return Object.assign({}, state, {
        wantToWatch: [...state.wantToWatch, { ...action.payload }],
        fav: [...state.fav]
      });
    case ADD_TO_FAV:
      return Object.assign({}, state, {
        fav: [...state.fav, { ...action.payload }],
        wantToWatch: [...state.wantToWatch]
      });
    case REMOVE_FROM_FAV:
      return Object.assign({}, state, {
        fav: [...state.fav.filter(fav => fav.id !== action.payload)],
        wantToWatch: [...state.wantToWatch]
      });
    case REMOVE_FROM_WANT_TO_WATCH:
      return Object.assign({}, state, {
        fav: [...state.fav],
        wantToWatch: [
          ...state.wantToWatch.filter(
            wantToWatch => wantToWatch.id !== action.payload
          )
        ]
      });
    case TOGGLE_FAV:
      return Object.assign({}, state, {
        fav: [
          ...state.fav.filter(fav => fav.id === action.payload.id).length
            ? state.fav.filter(fav => fav.id !== action.payload.id)
            : [...state.fav, { ...action.payload }]
				],
				wantToWatch: [...state.wantToWatch]
      });
    case TOGGLE_WANT_TO_WATCH:
      return Object.assign({}, state, {
        fav: [...state.fav],
        wantToWatch: [
          ...state.wantToWatch.filter(wantToWatch => wantToWatch.id === action.payload.id).length
            ? state.wantToWatch.filter(wantToWatch => wantToWatch.id !== action.payload.id)
            : [...state.wantToWatch, { ...action.payload }]
				]
      });
    default:
      return state;
  }
};

export default rootReducer;

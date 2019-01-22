import {
  ADD_TO_WANT_TO_WATCH,
  REMOVE_FROM_FAV,
  REMOVE_FROM_WANT_TO_WATCH,
  ADD_TO_FAV,
  TOGGLE_WANT_TO_WATCH,
  TOGGLE_FAV
} from "./actions";

export const mapStateToProps = state => ({
  fav: state.fav,
  wantToWatch: state.wantToWatch
});
export const mapDispatchToProps = dispatch => ({
   addToFav: movie => dispatch({ type: ADD_TO_FAV, payload: movie }),
   addToWantToWatch: movie =>
      dispatch({ type: ADD_TO_WANT_TO_WATCH, payload: movie }),
   removeFromFav: movieId =>
      dispatch({ type: REMOVE_FROM_FAV, payload: movieId }),
   removeFromWantToWatch: movieId =>
      dispatch({ type: REMOVE_FROM_WANT_TO_WATCH, payload: movieId }),
   toggleFav: movie => dispatch({ type: TOGGLE_FAV, payload: movie }),
   toggleWantToWatch: movie => dispatch({ type: TOGGLE_WANT_TO_WATCH, payload: movie })
});

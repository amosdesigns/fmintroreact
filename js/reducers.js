/**
 *  - Created by Jerome on 7/11/17.
 */
import { SET_SEARCH_TERM } from './actions';
const DEFAULT_STATE = {
  searchTerm: ''
};

const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return SET_SEARCH_TERM(state, action);
    default:
      return state;
  }
};

export default rootReducer;

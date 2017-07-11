import { SET_SEARCH_TERM } from './actions';

export function setSearchTerm() {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

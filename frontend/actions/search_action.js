import {fetchResults} from '../utils/search_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const fetchSearchResults = query => dispatch => {
    return fetchResults(query).then(results => dispatch({ type: RECEIVE_SEARCH_RESULTS, results }));
};
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SEARCH_RESULTS } from "../actions/search_action";

const searchResultsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.results;
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default searchResultsReducer;
import * as SessionUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const login = user => dispatch => {
    return SessionUtil.login(user).then(
        user_from_server => (dispatch({ type: RECEIVE_CURRENT_USER, currentUser: user_from_server })),
        err => (dispatch(receiveErrors(err.responseJSON)))
    );
};

export const signup = user => dispatch => {
    return SessionUtil.signup(user).then(
        user_from_server => (dispatch({ type: RECEIVE_CURRENT_USER, currentUser: user_from_server })),
        err => (dispatch(receiveErrors(err.responseJSON)))
    );
};

export const logout = () => dispatch => {
    return SessionUtil.logout().then(
        user_from_server => (dispatch({ type: LOGOUT_CURRENT_USER })),
        err => (dispatch(receiveErrors(err.responseJSON)))
    );
};


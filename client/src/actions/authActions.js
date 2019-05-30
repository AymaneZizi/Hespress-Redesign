import axios from 'axios'

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types'
import { returnErrors } from './errorActions'




export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })

    const config = tokenConfig(getState);

    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({ type: AUTH_ERROR })
        })
}

export const register = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const user = { email, password }

    axios.post('/api/users', user, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            // console.log(err.response.data)
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({ type: REGISTER_FAIL })
        })
}


export const tokenConfig = getState => {
    // Get token from localstorage
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    // If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
};
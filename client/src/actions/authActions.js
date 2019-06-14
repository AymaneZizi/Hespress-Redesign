import axios from 'axios'
// eslint-disable-next-line
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

export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

export const login = ({ email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Request body
    const body = { email, password };

    axios
        .post('/api/auth', body, config)
        .then(res =>
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        )
        .catch(err => {
            console.log('dispatch err', err);
            dispatch(
                returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
            );
            dispatch({
                type: LOGIN_FAIL
            });
        });
};


export const register = ({ name, email, password }) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };

    const user = { name, email, password }

    axios.post('/api/users', user, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            // console.log(err.response.data)
            dispatch(returnErrors(err.response.data, err.response.status, REGISTER_FAIL))
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



export const token = () => (dispatch, getState) => {
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


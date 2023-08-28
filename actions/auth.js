import reduxCall from '../utils/reduxCall'
import actionTypes from '../configs/actionTypes'

const LOGIN_ACTION = () => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: '/user',
            method: 'GET',
            name: 'LOGIN',
        })
    }
}

const VERIFY_USER_ACTION = (user_id) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: `/user/${user_id}`,
            method: 'GET',
            name: 'VERIFY_USER',
        })
    }
}

const REGISTER_INFO_ACTION = () => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: '/user',
            method: 'GET',
            name: 'REGISTER_INFO',
        })
    }
}

const REGISTER_ACTION = (formValue) => {
    return async dispatch => {
        return reduxCall(dispatch,{
            url: '/user',
            method: 'POST',
            name: 'REGISTER',
            body: formValue
        })
    }
}

const LOGOUT_ACTION = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export { LOGIN_ACTION, VERIFY_USER_ACTION, REGISTER_ACTION, REGISTER_INFO_ACTION, LOGOUT_ACTION }
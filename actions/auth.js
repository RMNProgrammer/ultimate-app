import reduxCall from '../utils/reduxCall'

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

export { LOGIN_ACTION, VERIFY_USER_ACTION, REGISTER_ACTION, REGISTER_INFO_ACTION }
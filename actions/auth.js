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

export { LOGIN_ACTION, REGISTER_ACTION }
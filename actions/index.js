import actionTypes from "../configs/actionTypes"

const LOGIN_ACTION = () => {
    return async dispatch => {
        dispatch({
            type: actionTypes.LOGIN_STARTED,
            loading: true,
            logged: true,
        })
        try{
            setTimeout( async () => {
                const response = await fetch('http://127.0.0.1:5000/login.json')
                const { user } = await response.json() 
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    loading: false,
                    logged: true,
                    user,
                })
            }, 5000);
        }
        catch(e){
            console.log('error',e)
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                loading: false,
                logged: false,
                error: true,
            })
        }
    }
}

export default LOGIN_ACTION

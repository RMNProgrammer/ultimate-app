import actionTypes from "../configs/actionTypes"

const auth = (state = [], action) => {
    console.log('action',action)
    switch(action.type) {
        case actionTypes.LOGIN_STARTED:
            return { 
                ...state, 
                loading: action.loading,
                logged: action.logged,
            }
        case actionTypes.LOGIN_SUCCESS:
            return { 
                ...state, 
                loading: action.loading,
                logged: action.logged,
                user: action.user,
            }
        case actionTypes.LOGIN_FAIL:
            return { 
                ...state, 
                ...action,
            }
        default:
            return state
    }
}

export default auth

import Cookies from 'universal-cookie'
import actionTypes from '../configs/actionTypes'

const auth = (state = [], action) => {
    const cookies = new Cookies()
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
                users: action.response,
            }
        case actionTypes.LOGIN_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.VERIFY_USER_STARTED:
            return { 
                ...state, 
                logged: action.logged
            }
        case actionTypes.VERIFY_USER_SUCCESS:
            let user = {}
            if( action.response ){
                user = {
                    email: action.response.email
                }
            }
            return { 
                ...state, 
                logged: action.logged,
                user,
            }
        case actionTypes.VERIFY_USER_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.REGISTER_STARTED:
            return { 
                ...state, 
                loading: action.loading
            }
        case actionTypes.REGISTER_SUCCESS:
            return { 
                ...state, 
                loading: action.loading
            }
        case actionTypes.REGISTER_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.REGISTER_INFO_STARTED:
            return { 
                ...state, 
                loading: action.loading
            }
        case actionTypes.REGISTER_INFO_SUCCESS:
            return { 
                ...state, 
                loading: action.loading,
                users: action.response
            }
        case actionTypes.REGISTER_INFO_FAILED:
            return { 
                ...state, 
                ...action,
            }
        case actionTypes.LOGOUT:
            cookies.remove('user-id')
            cookies.remove('logged')
            cookies.remove('email')
            return {
                ...state,
                logged: false,
                user: {},
            }
        default:
            return state
    }
}

export default auth

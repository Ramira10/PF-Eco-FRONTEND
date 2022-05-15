import { USER_LOGIN, USER_LOGOUT, USER_REGISTER, USER_REGISTER_CLEAR } from "../actions/constants"


const initialState = {
    userInfo:{},
    userRegister:null
}

export const userReducer =(state=initialState, action)=>{
    switch(action.type){
        case USER_LOGIN:
            return {
                ...state,
                userInfo: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                userInfo:{}
            }
        case USER_REGISTER:
            return {
                ...state,
                userRegister: action.payload
            }
        case USER_REGISTER_CLEAR:
            return {
                ...state,
                userRegister:{}
            }

        default:
            return state;
    }
}
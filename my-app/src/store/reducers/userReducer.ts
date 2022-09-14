import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    user: {
        id: null,
        first_name: '',
        last_name: ''
    },
    token: {},
    isAuthorized: false
}
export const userReducer = (state = initialState, action: any) =>{

    switch(action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case ActionTypes.USER_LOGIN:
            return {
                ...state,
                token: action.payload,
                isAuthorized: true
            };
        case ActionTypes.USER_LOGOUT:
            return {
                ...state,
                user: {},
                token: {},
                isAuthorized: false
            };
        default:
            return state;

    }

}
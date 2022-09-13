import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    user: {
        id: null,
        first_name: '',
        last_name: ''
    }
}
export const userReducer = (state = initialState, action: any) =>{

    switch(action.type) {
        case ActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;

    }

}
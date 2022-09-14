import { ActionTypes } from "../constants/actionTypes";
import {fetchUser, userLogin, userSignUp} from '../../service/User.service';

export const setUser = () => async (dispatch: any) => {

    const {data} = await fetchUser();

    dispatch({
        type: ActionTypes.SET_USER,
        payload: data.user,
    })
}

export const loginUser = (info: any) => async (dispatch: any) => {

    try{
        const {data} = await userLogin(info);  
        localStorage.setItem('token', data.auth_token);
    
        dispatch({
            type: ActionTypes.USER_LOGIN,
            payload: data.auth_token,
        })
    }
    catch(err){
        dispatch({
            type: ActionTypes.ERROR,
            payload: err,
        })
    }
}

export const logoutUser = () => (dispatch: any) => {

    localStorage.removeItem('token');

    dispatch({
        type: ActionTypes.USER_LOGOUT
    })
}

export const signUpUser = (info: any) => async (dispatch: any) => {
    try{
        const {data} = await userSignUp(info);
        localStorage.setItem('token', data.auth_token);

        dispatch({
            type: ActionTypes.USER_SIGNUP,
            payload: data.auth_token,
        })
    }
    catch(err){
        dispatch({
            type: ActionTypes.ERROR,
            payload: err,
        })
    }
}

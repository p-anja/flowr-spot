import { ActionTypes } from "../constants/actionTypes";
import {fetchUser, userLogin, userSignUp} from '../../service/User.service';
import ModalStatus from "../../enum/ModalStatus";

export const setUser = () => async (dispatch: any) => {

    const {data} = await fetchUser();

    dispatch({
        type: ActionTypes.SET_USER,
        payload: data.user,
    })
}

export const loginUser = (info: any, content: any) => async (dispatch: any) => {

    try{
        const {data} = await userLogin(info);  
        localStorage.setItem('token', data.auth_token);
    
        dispatch({
            type: ActionTypes.USER_LOGIN,
            payload: {
                token: data.auth_token,
                content
            }
        })
    }
    catch(err){

        dispatch({
            type: ActionTypes.ERROR,
            payload: err,
        })
    }
}

export const logoutUser = (content: any) => (dispatch: any) => {

    localStorage.removeItem('token');

    dispatch({
        type: ActionTypes.USER_LOGOUT,
        payload: content
    })
}

export const signUpUser = (info: any, content: any) => async (dispatch: any) => {
    try{
        const {data} = await userSignUp(info);
        localStorage.setItem('token', data.auth_token);

        dispatch({
            type: ActionTypes.USER_SIGNUP,
            payload: {
                token: data.auth_token,
                content
            }
        })
    }
    catch(err){
        dispatch({
            type: ActionTypes.ERROR,
            payload: err,
        })
    }
}

export const openModal = (status: ModalStatus) =>  {

    return {
        type: ActionTypes.OPEN_MODAL,
        payload: status
    }

}

export const closeModal = () =>  {

    return {
        type: ActionTypes.CLOSE_MODAL
    }

}
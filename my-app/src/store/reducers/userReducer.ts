import ModalStatus from "../../enum/ModalStatus";
import { ActionTypes } from "../constants/actionTypes"

import {Reducer} from '@reduxjs/toolkit'

interface UserState {
    user: {
        id: number | null,
        first_name: string | null,
        last_name: string | null
    } | null,
    token: string | null,
    isAuthorized: boolean,
    errorMessage: string | null,
    modalStatus: ModalStatus | null,
    content: string | null,
    openMenu: boolean,
    openLoginForm: boolean,
    openSignUpForm: boolean,
    openLogoutForm: boolean
}

const initialState: UserState = {
    user: {
        id: null,
        first_name: '',
        last_name: ''
    },
    token: '',
    isAuthorized: false,
    errorMessage: null,
    modalStatus: null,
    content: null,
    openMenu: false,
    openLoginForm: false,
    openSignUpForm: false,
    openLogoutForm: false

}
export const userReducer: Reducer<UserState> = (state = initialState, action: any) =>{

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
                isAuthorized: true,
                errorMessage: null,
                modalStatus: ModalStatus.LogInSuccess,
                content: action.payload.content
            };
        case ActionTypes.USER_LOGOUT:
            return {
                ...state,
                user: null,
                token: null,
                isAuthorized: false,
                modalStatus: ModalStatus.LogOutSuccess,
                content: action.payload
            };
        case ActionTypes.USER_SIGNUP:
            return{
                ...state,
                token: action.payload,
                isAuthorized: true,
                errorMessage: null,
                modalStatus: ModalStatus.SignUpSuccess,
                content: action.payload.content
            };
        case ActionTypes.ERROR:
            return{
                ...state,
                errorMessage: action.payload.data.error
        };
        case ActionTypes.OPEN_MODAL:
            return{
                ...state,
                modalStatus: action.payload,
        };
        case ActionTypes.CLOSE_MODAL:
            return{
                ...state,
                modalStatus: null,
                content: null
        };
        case ActionTypes.OPEN_MENU:
            return{
                ...state,
                openMenu: true
        };
        case ActionTypes.CLOSE_MENU:
            return{
                ...state,
                openMenu: false
        };
        case ActionTypes.OPEN_LOGIN_FORM:
            return{
                ...state,
                openLoginForm: true
        };
        case ActionTypes.CLOSE_LOGIN_FORM:
            return{
                ...state,
                openLoginForm: false
        };
        case ActionTypes.OPEN_SIGNUP_FORM:
            return{
                ...state,
                openSignUpForm: true
        };
        case ActionTypes.CLOSE_SIGNUP_FORM:
            return{
                ...state,
                openSignUpForm: false
        };
        case ActionTypes.CLOSE_LOGOUT_FORM:
            return{
                ...state,
                openLogoutForm: false
        };
        case ActionTypes.OPEN_LOGOUT_FORM:
            return{
                ...state,
                openLogoutForm: true
        };
        default:
            return state;

    }

}
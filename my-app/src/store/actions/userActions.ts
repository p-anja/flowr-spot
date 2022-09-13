import { ActionTypes } from "../constants/actionTypes";
import {fetchUser} from '../../service/User.service';

export const setUser = () => async (dispatch: any) => {

    const {data} = await fetchUser();

    dispatch({
        type: ActionTypes.SET_USER,
        payload: data.user,
    })
}


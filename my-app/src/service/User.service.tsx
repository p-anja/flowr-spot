import {http} from '../utils/Http';

export type User = {
    id: number,
    first_name: string,
    last_name: string
}

export type UserLogin = {
    email: string,
    password: string
}

export type UserSignUp = {
    first_name: string, 
    last_name: string,
    email: string, 
    password: string,
    date_of_birth: string
}

export const fetchUser = async (): Promise<any> => {
    return await http.get('/v1/users/me')
}

export const userLogin = async (data: UserLogin): Promise<any> => {
    return await http.post('/v1/users/login', data)
}

export const userSignUp = async (data: UserSignUp): Promise<any> => {
    return await http.post('/v1/users/register', data)
}
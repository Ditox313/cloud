import axios from "axios"
import { setUser } from "../reducers/userReducer";


export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/register`, { email, password })
    } catch (error) {
        throw error
    }
    
}


export const login =  (email, password) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, { email, password })

            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            
        } catch (error) {
            throw error
        }
    }
}
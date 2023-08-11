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



// Получаем данные от юзера при любом заходе в приложение
export const auth = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`, { headers: { Authorization: localStorage.getItem('token') }})

            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)

        } catch (error) {
            localStorage.removeItem('token')
            console.log('Пользователь не авторизирован');
        }
    }
}
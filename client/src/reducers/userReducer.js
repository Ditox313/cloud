

const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"



// Состояние
const defaultState = {
    currentUser: {},
    isAuth: false
}
 


//Редьюсер юзера
export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default: return state
    }
}



// Экшен криейтор
export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

// Экшен криейтор
export const logout = () => ({
    type: LOGOUT
})
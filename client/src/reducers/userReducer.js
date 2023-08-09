

// Название экшена
const SET_USER = "SET_USER"



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
                currentUser: action.payload.user,
                isAuth: true
            }
        default: return state
    }
}



// Экшен криейтор
export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})
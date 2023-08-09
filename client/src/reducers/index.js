import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
// import uploadReducer from "./uploadReducer";
// import appReducer from "./appReducer";



// Создаем хранилище редюсеров
const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer
})


// Жкспортируем стор
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
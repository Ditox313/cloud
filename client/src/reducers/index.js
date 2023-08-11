import { applyMiddleware, combineReducers, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";




// Создаем хранилище редюсеров
const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer
})



export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true
});


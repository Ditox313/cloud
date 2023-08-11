import Registration from "./components/Registration/Registration";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './app.css'
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
import { auth } from "./actions/user";
import { useDispatch } from 'react-redux'
import {  useEffect } from 'react';


function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispath = useDispatch()


  // Получаем данные о пользователе при любом заходе в приложение
  useEffect(()=>{
    dispath(auth())
  },[])

  

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className="wrap">
          {!isAuth && 
            <Routes>
              <Route path="/registration" Component={Registration} />
              <Route path="/login" Component={Login} />
            </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

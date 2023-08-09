import React, { useState } from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
import { NavLink } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../reducers/userReducer";
// import { getFiles, searchFiles } from "../../actions/file";
// import { showLoader } from "../../reducers/appReducer";
// import avatarLogo from '../../assets/img/avatar.svg'
// import { API_URL } from "../../config";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar__logo" />
                <div className="navbar__header">XSODEX CLOUD</div>
                <div className='navbar__login'><NavLink to="/login">Войти</NavLink></div>
                <div className='navbar__registration'><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>



// <div className="navbar">
//             <div className="container">
//                 <img src={Logo} alt="" className="navbar__logo" />
//                 <div className="navbar__header">XSODEX CLOUD</div>
//                 {isAuth && <input
//                     //value={searchName}
//                     onChange={e => searchChangeHandler(e)}
//                     className='navbar__search'
//                     type="text"
//                     placeholder="Название файла..." />}
//                 {!isAuth && <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>}
//                 {!isAuth && <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>}
//                 {isAuth && <div className="navbar__login" onClick={() => dispatch(logout())}>Выход</div>}
//                 {isAuth && <NavLink to='/profile'>
//                     <img className="navbar__avatar" src={avatar} alt="" />
//                 </NavLink>}
//             </div>
//         </div>
    );
};

export default Navbar;
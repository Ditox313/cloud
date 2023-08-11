import React, { useState } from 'react';
import './registration.css'
import Input from '../../utils/input/Input';
import { login } from "../../actions/user";
import { useDispatch } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    
    return (
        <div className='auth'>
            <div className='auth__header'>Авторизация</div>
            <Input type='text' value={email} setValue={setEmail} placeholder='Введите e-mail' />
            <Input type='password' value={password} setValue={setPassword} placeholder='Введите пароль' />
            <button className='auth__btn' onClick={() =>dispatch(login(email, password))}>Войти</button>
        </div>
    );
};

export default Login;
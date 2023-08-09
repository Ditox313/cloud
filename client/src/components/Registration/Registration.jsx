import React, { useState } from 'react';
import './registration.css'
import Input from '../../utils/input/Input';
import { registration } from "../../actions/user";

const Registration = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='registration'>
            <div className='registration__header'>Регистрация</div>
            <Input type='text' value={email} setValue={setEmail} placeholder='Введите e-mail'/>
            <Input type='password' value={password} setValue={setPassword} placeholder='Введите пароль'/>
            <button className='registration__btn' onClick={() => { registration(email, password) }}>Войти</button>
        </div>
    );
};

export default Registration;
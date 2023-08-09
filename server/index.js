const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const authRoutes = require('./Routes/auth.js');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


const app = express();
const PORT = config.get('serverPort');


// Регистрируем модуль bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Регистрируем Morgan 
app.use(morgan('dev'));


// Регистрируем Cors(Протокол безопасности, который позволяет обращаться к нашему api с разных доменов)
app.use(cors());


// Регистрируем роут auth
app.use('/api/auth', authRoutes);

const start = async ()=> {
    try {
        // Запускаем сервер
        app.listen(PORT, function () {
            console.log(`Сервер бэкэнда работает на порте ${PORT}`);
        });

        await mongoose.connect(config.get('mongoUri'), { useNewUrlParser: true, useUnifiedTopology: true})
            .then(function () {
                console.log('Мы подключились к БД приложения!!!');
            })
            .catch(function (error) {
                console.log(error);
            });
    } catch (error) {
        
    }
}

start()



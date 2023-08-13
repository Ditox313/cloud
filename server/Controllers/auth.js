const User = require('../Models/User.js');
const bcrypt = require('bcryptjs');
const errorHandler = require('../Utils/errorHendler');
const jwt = require('jsonwebtoken');
const config = require('config');
const File = require('../Models/File.js');
const fileService = require('../Services/fileService.js');



// Контроллер для Login
module.exports.login = async function(req, res) {

    const candidate = await User.findOne({
        email: req.body.email
    });


    if (candidate) {
        // Проверяем на соответствие пароля
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);

        if (passwordResult) {
            // Генерация токена(Генереруем объект с данными о пользователе и его кодируем)
            const token = jwt.sign({
                    id: candidate._id
                },
                config.get('secretKey'), { expiresIn: 60 * 60 }
            );

            // Отправляем ответ
            res.status(200).json({
                token: `Bearer ${token}`,
                user: {
                    id: candidate._id,
                    email: candidate.email,
                    diskSpace: candidate.diskSpace,
                    userSpace: candidate.usedSpace,
                    avatar: candidate.avatar
                }
            });
        } else {
            res.status(401).json({
                message: "Ошибка. Пароли не совпадают. Попробуйте еще раз!"
            });
        }
    } else {
        res.status(404).json({
            message: "Пользователя с таким E-mail не найдено!"
        });
    }
};



// Контроллер для register 
module.exports.register = async function(req, res) {

    // Делаем проверку на наличие пользователя в БД
    const canditate = await User.findOne({
        email: req.body.email
    });

    if (canditate) {
        res.status(409).json({
            message: "Такой Email уже существует в системе. Проверьте правильность введенных данных!"
        });
    } else {
        // Шифрование пароля пользователя
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;


        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        });

        try {
            await user.save();

            // Создаем для пользователя отдельную папку
            await fileService.createDir(new File({user: user._id, name: ''}))

            res.status(201).json(user);
        } catch (error) {
            errorHandler(res, error);
        }
    }



};



// Контроллер для auth. Получаем данные о пользователе при любом заходе в приложение
module.exports.auth = async function (req, res) {
    try {
        const user = await User.findOne({id: req.user._id})

        // Перезапишем токен
        const token = jwt.sign({
            id: user._id
        },config.get('secretKey'), { expiresIn: 60 * 60 });

        // Отправляем ответ
        res.status(200).json({
            token: `Bearer ${token}`,
            user: {
                id: user._id,
                email: user.email,
                diskSpace: user.diskSpace,
                userSpace: user.usedSpace,
                avatar: user.avatar
            }
        });
    } catch (error) {
        res.status(404).json({
            message: "Ошибка"
        });
    }
};
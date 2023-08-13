const File = require('../Models/File.js');
const bcrypt = require('bcryptjs');
const errorHandler = require('../Utils/errorHendler.js');
const jwt = require('jsonwebtoken');
const config = require('config');



// Контроллер для Login
module.exports.test = async function(req, res) {

    // const candidate = await User.findOne({
    //     email: req.body.email
    // });


    // if (candidate) {
    //     // Проверяем на соответствие пароля
    //     const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);

    //     if (passwordResult) {
    //         // Генерация токена(Генереруем объект с данными о пользователе и его кодируем)
    //         const token = jwt.sign({
    //                 id: candidate._id
    //             },
    //             config.get('secretKey'), { expiresIn: 60 * 60 }
    //         );

    //         // Отправляем ответ
    //         res.status(200).json({
    //             token: `Bearer ${token}`,
    //             user: {
    //                 id: candidate._id,
    //                 email: candidate.email,
    //                 diskSpace: candidate.diskSpace,
    //                 userSpace: candidate.usedSpace,
    //                 avatar: candidate.avatar
    //             }
    //         });
    //     } else {
    //         res.status(401).json({
    //             message: "Ошибка. Пароли не совпадают. Попробуйте еще раз!"
    //         });
    //     }
    // } else {
    //     res.status(404).json({
    //         message: "Пользователя с таким E-mail не найдено!"
    //     });
    // }
};


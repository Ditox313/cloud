const express = require('express');
const router = express.Router();
const controller = require('../Controllers/auth.js');
const authMiddleware = require('../middleware/auth.middleware.js');


// Роут на login
router.post('/login', controller.login);


// Получаем данные о пользователе при любом заходе в приложение
router.get('/auth', authMiddleware, controller.auth);


// Роут на register
router.post('/register', controller.register);



module.exports = router;
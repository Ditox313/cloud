const express = require('express');
const router = express.Router();
const controller = require('../Controllers/file.js');
const authMiddleware = require('../middleware/auth.middleware.js');



// Получаем данные о пользователе при любом заходе в приложение
router.get('/test', authMiddleware, controller.test);




module.exports = router;
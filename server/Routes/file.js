const express = require('express');
const router = express.Router();
const controller = require('../Controllers/file.js');
const authMiddleware = require('../middleware/auth.middleware.js');



// Создание директории
router.post('', authMiddleware, controller.createDir);


// Получить файлы
router.get('', authMiddleware, controller.getFiles);




module.exports = router;
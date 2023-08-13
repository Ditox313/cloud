const File = require('../Models/File');
const fileService = require('../Services/fileService.js');
const User = require('../Models/User.js');
const errorHandler = require('../Utils/errorHendler.js');
const jwt = require('jsonwebtoken');
const config = require('config');




// Контроллер для createDir
module.exports.createDir = async function(req, res) {
    try {
        const file =  new File({
            name: req.body.name,
            type: req.body.type,
            parent: req.body.parent,
            user: req.user.id
        });


        // По id найдем родительскую директорию
        const parentFile = await File.findOne({ _id: req.body.parent }) 
        

        // Если родительский файл не был найден, то он будет добавлен в корневую директорию
        if(!parentFile)
        {
            // Если нет родительской директории
            file.path = req.body.name
            await fileService.createDir(file)
        }
        else
        {
            // Если есть родительская категория
            file.path = `${parentFile.path}/${file.name}`
            await fileService.createDir(file)
            parentFile.childs.push(file._id)
            await parentFile.save()
        }

        await file.save()

        res.status(200).json(file);


    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Ошибка создания директории!"
        });
    }

};


// Получение файлов
module.exports.getFiles = async function (req, res) {
    try {
        
        const files = await File.find({user: req.user.id, parent: req.query.parent})

        res.status(200).json({files});

    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "Файлов не найдено. Ошибка"
        });
    }

};
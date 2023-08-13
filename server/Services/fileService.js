const fs = require('fs')
const File = require('../Models/File')
const config = require('config')


class FileService {

    // Соезание директории
    createDir(file)
    {
        // Создаем ауть до файла
        const filePath = `${config.get('filePath')}/${file.user}/${file.path}`

        return new Promise((resolve,reject) => {
            try {
                // Если есть файл  по заданному пути существует то создаем папку. Запускаем эти функции в синхронном режиме что бы функции выполнялись последовательно
                if(!fs.existsSync(filePath))
                {
                    fs.mkdirSync(filePath)
                    return resolve({message: 'Директория был создан'})
                }
                else {
                    return reject({ message: 'Директория по такому пути уже существует' })
                }
            } catch (error) {
                console.log(error);
                return reject({ message: 'Ошибка создания директории'})
            }
        })
    }
}


module.exports = new FileService()
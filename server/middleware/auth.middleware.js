const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    // Если метод запроса option то вызовим следующий middlewere функцией next()
    if (req.method === 'OPTIONS') {
       return next()
    }

    try {
        // Получаем токен из хедера.Токет состоит из бирера и токена. Берем только токен
        const token = req.headers.authorization.split(' ')[1]

        // Если нет токена то возвращаем ошибку
        if (!token) {
            return res.status(401).json({message: 'Пользователь не авторизован'})
        }

        // Декодируем токен и помещаем данные в юзера и вызываем следующий middlewere по цепочке
        const decoded = jwt.verify(token, config.get('secretKey'))

        // Помещаем данные из токена в объект юзера
        req.user = decoded

        // Вызываем по цепочке следующий middlewere
        next()
    } catch (e) {
        return res.status(401).json({ message: 'Пользователь не авторизован' })
    }
}

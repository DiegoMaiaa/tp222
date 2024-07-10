const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('conta')
})
app.get('/result', (request, response) => {
    var value1 = request.query.valor1
    var value2 = request.query.valor2
    var value3 = request.query.valor3
    var igual = value1 * value2 / value3


    response.render('result', { r: igual })
})
app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080')
})

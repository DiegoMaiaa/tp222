const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('conta')
})

app.get('/index', (request, response) => {
    
    var resultado= ''
    response.render('rayane', {resultado})

})
app.post('/soma', (request, response) => {

            resultado= parseFloat(request.body.n1) + parseFloat(request.body.n2)
            response.render('rayane')

})
app.post('/subtrair', (request, response) => {
    
            resultado= parseFloat(request.body.n1) - parseFloat(request.body.n2)
            response.render('rayane')

})
app.post('/multiplicacao', (request, response) => {
            
            resultado= parseFloat(request.body.n1) * parseFloat(request.body.n2)
            response.render('rayane')

})
app.post('/divisao', (request, response) => {
        
            resultado= parseFloat(request.body.n1) / parseFloat(request.body.n2)
            response.render('rayane')

})

app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080')
})
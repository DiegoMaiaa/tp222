const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
    response.render('conta')
})
app.get('/tudonofront', (request, response) => {
    response.render('rayane')
})
app.get('/soma', (request, response) => {
    result = parseFloat(n1.value) + parseFloat(n2.value);
            document.getElementById("resultadosoma").innerHTML = result;

})

app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080')
})

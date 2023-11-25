//Requiero express y path
const express = require ('express')
const path = require ('path')
const app = express()

//Uso path para obtener ruta de la carpeta public
const publicpath = path.resolve (__dirname, './public')
//Uso app.use para definir que la carpeta contiene recursos estaticos
app.use(express.static (publicpath))

//Levanto un servidor web que responde al puerto 3000
app.listen(3000, ()=> {console.log ("Servidor corriendo en el puerto 3000")})

//Enviar html
app.get('/', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'./views/index.html'))
})
app.get('/register', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})
app.get('/login', (req,res)=> {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})

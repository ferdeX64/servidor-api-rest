require('./config/config')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.get('/usuario',function(req,res){
    res.json('Get usuario')
})
app.put('/usuario/:id',function(req,res){
    let id=req.params.id;
    res.json({
        id
    })
})
app.post('/usuario',function(req,res){
    let body= req.body
    if(body.nombre===undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es requerido'
        });
    }
    else{
    res.json({
        persona:body
    })
    }
})
app.get('/', function (req, res){
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Escuchando peticiones en el puerto 3000`)
})
const express = require('express');
const app = express();

app.get("/", function(req, res){ 
    res.sendFile(__dirname + "/index-xmlhttprequest.html"); 
})

app.get("/desafio", function(req, res){ 
    res.sendFile(__dirname + "/desafio.html"); 
})

app.get("/aula_json.json", function(req, res){ 
    res.sendFile(__dirname + "/aula_json.json"); 
})

app.use('/', express.static(__dirname + '/'));

app.listen(8080, function(){
    console.log("Servidor rodando em http://localhost:8080")
});
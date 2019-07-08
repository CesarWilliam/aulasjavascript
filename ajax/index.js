const express = require('express');
const app = express();

app.get("/", function(req, res){ 
    res.sendFile(__dirname + "/index-xmlhttprequest.html"); 
})

app.listen(8080, function(){
    console.log("Servidor rodando em http://localhost:8080")
});
const express = require('express');
const app = express();

const db = require('./models/db');
const User = require('./models/user');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página Inicial");
});

app.post("/cadastrar", async (req, res) => {
    res.send("Página cadastrar");
    console.log(req.body);
    
    await User.create(req.body);

});

app.listen(8090, () => {
    console.log("Servidor iniciado na porta 8090: http://localhost:8090");
})
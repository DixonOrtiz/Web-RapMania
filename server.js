const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");


app.use(express.static(__dirname + "/public"));

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("index", {
        usuario: "Dixon Ortiz"
    });
})

app.get("/productos", (req, res) => {
    res.send("Hola Mundo");
})

app.listen(8000, () => {
    console.log("Escuchando en el puerto 8000");
})
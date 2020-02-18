var express = require("express");
var ruta = express.Router();

ruta.get("/fa", function(req, res) {
	res.render("home");
});

module.exports.ruta = ruta;
//
// ./api/routes_v1.js
//
var express = require('express');
var routes = express.Router();
var db = require('../config/db');

var mijnObject = { 
	mijntekst: 'Hello World!',
	label: "Nog meer tekst",
	mijnarray: [ "tekst", "nog meer tekst", 2 ],
	mijnobject: {
		mijnlabel: 'mijntekst',
		getal: 4
	}
};

routes.get('/hello', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json(mijnObject);
});

routes.get('/goodbye', function(req, res){
	res.contentType('application/json');
	res.status(200);
	res.json({ 'tekst': 'Goodbye!'});
});

routes.get('/cities', function(req, res){
	res.contentType('application/json');

	db.query('SELECT * FROM city', function(error, rows, fields){
		if (error){
			res.status(400).json(error);
		}else{
			res.status(200).json(rows);
		};

	});
});

routes.get('/cities/:id', function(req, res){

	var cityId = req.params.id;

    res.contentType('application/json');

    db.query('SELECT * FROM city WHERE city_id =?', [ cityId ],
		function(error, rows, fields){
        if (error){
            res.status(400).json(error);
        }else{
            res.status(200).json(rows);
        };

    });
});

module.exports = routes;
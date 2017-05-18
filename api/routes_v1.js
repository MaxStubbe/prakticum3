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

routes.post('/cities', function(req, res){

    var city = req.body;
    var query = {
        sql: 'INSERT INTO `city`(city) VALUES (?)',
        values: [ city.city ],
        timeout: 2000 //2sec
    };

    console.dir(city);
    console.log('Onze query: ' + query.sql);

    res.contentType('application/json');
    db.query(query, function(error, rows, fields){
        if (error){
            res.status(400);
            res.json(error);
        }else{
            res.status(200);
            res.json(rows);
        };
    });
});

routes.put('/cities/:id', function(req, res){

    var city = req.body;
    var cityId = req.params.id;
    var query = {
        sql: 'UPDATE `city` SET city=? WHERE city_id=?',
        values: [ city.city, cityId ],
        timeout: 2000 //2sec
    };

    console.dir(city);
    console.log('Onze query: ' + query.sql);

    res.contentType('application/json');
    db.query(query, function(error, rows, fields){
        if (error){
            res.status(400);
            res.json(error);
        }else{
            res.status(200);
            res.json(rows);
        };
    });
});

routes.delete('/cities/:id', function(req, res){

    var city = req.body;
    var cityId = req.params.id;
    var query = {
        sql: 'DELETE FROM `city` WHERE city_id=?',
        values: [ cityId ],
        timeout: 2000 //2sec
    };

    console.dir(city);
    console.log('Onze query: ' + query.sql);

    res.contentType('application/json');
    db.query(query, function(error, rows, fields){
        if (error){
            res.status(400);
            res.json(error);
        }else{
            res.status(200);
            res.json(rows);
        };
    });
});

// countrys

routes.get('/countries', function(req, res){
    res.contentType('application/json');

    db.query('SELECT * FROM country', function(error, rows, fields){
        if (error){
            res.status(400).json(error);
        }else{
            res.status(200).json(rows);
        };

    });
});

routes.get('/countries/:id', function(req, res){

    var cityId = req.params.id;

    res.contentType('application/json');

    db.query('SELECT * FROM country WHERE country_id =?', [ cityId ],
        function(error, rows, fields){
            if (error){
                res.status(400).json(error);
            }else{
                res.status(200).json(rows);
            };

        });
});

routes.post('/countries', function(req, res){

    var country = req.body;
    var query = {
        sql: 'INSERT INTO `counrty`(country) VALUES (?)',
        values: [ country.country ],
        timeout: 2000 //2sec
    };

    console.dir(country);
    console.log('Onze query: ' + query.sql);

    res.contentType('application/json');
    db.query(query, function(error, rows, fields){
        if (error){
            res.status(400);
            res.json(error);
        }else{
            res.status(200);
            res.json(rows);
        };
    });
});

routes.put('/countries/:id', function(req, res){

    var country = req.body;
    var countryId = req.params.id;
    var query = {
        sql: 'UPDATE `country` SET country=? WHERE country_id=?',
        values: [ country.country, countryId ],
        timeout: 2000 //2sec
    };

    console.dir(country);
    console.log('Onze query: ' + query.sql);

    res.contentType('application/json');
    db.query(query, function(error, rows, fields){
        if (error){
            res.status(400);
            res.json(error);
        }else{
            res.status(200);
            res.json(rows);
        };
    });
});

routes.delete('/countries/:id', function(req, res){

    var country = req.body;
    var countryId = req.params.id;
    var query = {
        sql: 'DELETE FROM `country` WHERE country_id=?',
        values: [ countryId ],
        timeout: 2000 //2sec
    };

    console.dir(country);
    console.log('Onze query: ' + query.sql);

    res.contentType('application/json');
    db.query(query, function(error, rows, fields){
        if (error){
            res.status(400);
            res.json(error);
        }else{
            res.status(200);
            res.json(rows);
        };
    });
});

module.exports = routes;
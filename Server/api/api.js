var router = require('express').Router();
var async = require('async');
//var faker = require('faker');
var Category = require('../models/category');
var Product = require('../models/product');


router.post('/search', function (req, res, next) {
	console.log(req.body.search_term)
	Product.search({
		query_string: { query: req.body.search_term }
	}, function (err, results) {
		if (err) return next(err);
		res.json(results);
	});
});

router.get('/:name', function (req, res, next) {
	async.waterfall([
		function (callback) {
			Category.findOne({ name: req.params.name }, function (err, category) {
				if (err) return next(err);
				callback(null, category);
			});
		},

		function (category, callback) {
			for (var i = 0; i < 10; i++) {
				var product = new Product();
				product.author = author._id;
				product.pname = faker.commerce.pname();
				product.pdesc = faker.lorem.pdesc();
				product.amount = faker.commerce.amount();
				product.time = faker.image.time();
				product.category = faker.image.category();
				product.image = faker.image.image();

				product.save();
			}
		}
	]);
	res.json({ message: 'Success' });
});

module.exports = router;
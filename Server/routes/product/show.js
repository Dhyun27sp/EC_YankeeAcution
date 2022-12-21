const product = require('../../models/product');

module.exports = (app) => {
    app.get('/product/getAll', async (req, res, next) => {
        try {
            const results = await product.find();
            res.send(results);
        } catch (err) {
            console.log(err.message);
        }
    });
}
const product = require('../../models/product');

module.exports = (app) => {
    app.get('/product/getwcate', (req, res, next) => {
        var cate = req.body.cate;
        //res.send(cate);
        try {
            product.find({
                category: cate
            })
                .then(data => {
                    res.send(data)
                })
                .catch(err => {
                    res.send()
                })
        } catch (err) {
            res.send('Loi xay ra')
        }
    })
}
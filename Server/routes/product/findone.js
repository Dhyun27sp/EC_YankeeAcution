const product = require('../../models/product');

module.exports = (app) => {
    app.get('/product/getOne/', async (req, res, next) => {
        var id = '6398b5526439c3dce3c3806ddd';
        try {
            product.findById(id, function (err, docs) {
                if (err) {
                    res.send('Khong tim thay');
                }
                else {
                    res.send(docs);
                }
            })
        } catch (err) {
            res.send('Loi xay ra')
        }
    });
}
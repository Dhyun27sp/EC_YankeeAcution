const product = require('../../models/product')

module.exports = (app) => {
    app.post('/product/delete', (req, res, next) => {
        var pname = req.body.pname;

        product.deleteMany({ pname: pname })
            .then(data => {
                if (data) {
                    res.json('xoa thanh cong san pham')
                } else {
                    res.status(300).json('co loi xay ra')
                }
            })
            .catch(err => {
                res.status(500).json('Server co loi')
            })
    });
}
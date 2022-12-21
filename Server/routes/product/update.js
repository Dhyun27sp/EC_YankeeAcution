const product = require('../../models/product')

module.exports = (app) => {
    app.post('/product/edit', (req, res, next) => {
        var author = req.body.author;
        var pname = req.body.pname;
        var pdesc = req.body.pdesc;
        var amount = req.body.amount;
        var time = req.body.time;
        var category = req.body.category;
        var image = req.body.image;

        product.updateMany({
            pname: pname
        }, {
            $set: { author: author, pdesc: pdesc, amount: amount, time: time, category: category, image: image },
        })
            .then(data => {
                if (data) {
                    res.json('UPDATE thanh cong')
                } else {
                    res.status(300).json('Khong the update')
                }
            })
            .catch(err => {
                res.status(500).json('Server co loi')
            })
    });
}
const product = require('../../models/product')

module.exports = (app) => {
    app.post('/product/insert', (req, res, next) => {
        var author = req.body.author;
        var pname = req.body.pname;
        var pdesc = req.body.pdesc;
        var amount = req.body.amount;
        var time = req.body.time;
        var category = req.body.category;
        var image = req.body.image;

        product.create({
            author: author,
            pname: pname,
            pdesc: pdesc,
            amount: amount,
            time: time,
            category: category,
            image: image
        })
            .then(data => {
                res.json('Them san pham thanh cong')
            })
            .catch(err => {
                res.status(500).json('Co loi xay ra (author/category khong hop le')
            });
    });
}
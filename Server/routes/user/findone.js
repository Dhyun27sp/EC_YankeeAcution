const user = require('../../models/user');

module.exports = (app) => {
    app.get('/user/getOne/:id', async (req, res, next) => {
        var id = req.params.id;
        id = id.toString();
        try {
            user.findById(id, function (err, docs) {
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
const user = require('../../models/user');
module.exports = (app) => {
    app.post('/editP', (req, res, next) => {
        var name = req.body.name;
        var password = req.body.password;
        var repassword = req.body.repassword;
        if (password == repassword) {
            user.updateMany({
                name: name
            }, {
                $set: { password: password },
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
        } else {
            res.status(402).json('Repassword sai')
        }
    })
}
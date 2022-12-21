const user = require('../models/user');
module.exports = (app) => {
    app.post('/signin', (req, res, next) => {
        var name = req.body.name;
        var password = req.body.password;

        user.findOne({
            name: name,
            password: password
        })
            .then(data => {
                if (data) {
                    return res.status(200).json('dang nhap thanh cong')
                } else {
                    return res.status(300).json('tai khoan hoac mat khau khong dung')
                }
            })
            .catch(err => {
                return res.status(500).json('Server co loi')
            })
    });
}
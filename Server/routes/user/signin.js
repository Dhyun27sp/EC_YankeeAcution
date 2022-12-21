const user = require('../../models/user');
const jwt = require('jsonwebtoken');

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
                    var token = jwt.sign({ _id: data.id }, 'mk');
                    return res.status(200).json(token)
                } else {
                    return res.status(300).json('tai khoan hoac mat khau khong dung')
                }
            })
            .catch(err => {
                return res.status(500).json('Server co loi')
            })
    });

    app.get('/private/:token', (req, res, next) => {
        try {
            var token = req.params.token;
            var result = jwt.verify(token, 'mk');
            if (result) {
                next();
            }
        } catch (err) {
            return res.json('co loi');
        }
    }, (req, res, next) => {
        res.json('welcome QD bede');
    }
    )
}
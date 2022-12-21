const user = require('../models/user');
module.exports = (app) => {

    app.post('/signup', (req, res, next) => {
        var name = req.body.name;
        var password = req.body.password;
        var repassword = req.body.repassword;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var address = req.body.address;

        if (password == repassword) {
            user.create({
                name: name,
                password: password,
                firstname: firstname,
                lastname: lastname,
                email: email,
                address: address
            })

                .then(data => {
                    return res.status(200).json('Tao tai khoan thanh cong')
                })
                .catch(err => {
                    return res.status(300).json('Username da ton tai')
                });
        } else {
            return res.status(401).json('password khong khop')
        }
    });
}
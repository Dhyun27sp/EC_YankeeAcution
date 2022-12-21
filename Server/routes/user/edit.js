const user = require('../../models/user');
module.exports = (app) => {
    app.post('/edit', (req, res, next) => {
        var name = req.body.name;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var email = req.body.email;
        var address = req.body.address;

        user.updateMany({
            name: name
        }, {
            $set: { firstname: firstname, lastname: lastname, email: email, address: address },
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
    })
}
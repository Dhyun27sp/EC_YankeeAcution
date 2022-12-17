const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyP = require('body-parser');


app.use(bodyP.urlencoded({ extended: false }));
app.use(bodyP.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:123@tmdtn2st7.nu0qeav.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) console.log("Connected to database !!!");
    else console.log("Connect ERROR");
})
app.listen(5000, () => { console.log("Connection listen on port 5000") });

//Tao Schema
const user = require('./models/user');
const bid = require('./models/bid');
const feedback = require('./models/feedback');
const product = require('./models/product');
const category = require('./models/category');
const cart = require('./models/cart');


//Signup Function
app.post('/signup', async (req, res, next) => {
    var name = req.body.name;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var address = req.body.address;

    user.create({
        name: name,
        password: password,
        firstname: firstname,
        lastname: lastname,
        email: email,
        address: address
    })

        .then(data => {
            res.json('Tao tai khoan thanh cong')
        })
        .catch(err => {
            res.status(500).json('Username da ton tai')
        });
});

//Login Function
app.post('/login', (req, res, next) => {
    var name = req.body.name;
    var password = req.body.password;

    user.findOne({
        name: name,
        password: password
    })
        .then(data => {
            if (data) {
                res.json('dang nhap thanh cong')
            } else {
                res.status(300).json('tai khoan hoac mat khau khong dung')
            }
        })
        .catch(err => {
            res.status(500).json('Server co loi')
        })
});

//Edit profile Function chua hoan chinh
app.post('/edit', (req, res, next) => {
    var name = req.body.name;

    user.findOne({
        name: name
    })
        .then(data => {
            if (data) {
                user.updateOne({
                    name: name
                }, {
                    password: 'quangduong'
                })
                    .then(data => {
                        res.json('update thanh cong')
                    })
            }
            else {
                res.status(404).json('khong tim thay')
            }
        })
        .catch(err => {
            res.status(300).json('co loi')
        })

})

app.get('/', (req, res, next) => {
    res.json('Quang Duong ngu lon');
});
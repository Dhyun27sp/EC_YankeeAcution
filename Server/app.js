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

//Insert product
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

//Update product
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
})

app.post('/product/delete', (req, res, next) => {
    var pname = req.body.pname;

    product.deleteOne({ pname: pname })
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
})

app.get('/', (req, res, next) => {
    res.json('Quang Duong ngu lon');
});
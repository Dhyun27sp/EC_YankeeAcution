const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyP = require('body-parser');
const apiRoutes = require('./api/api');
const cors = require('cors');

app.use(bodyP.urlencoded({ extended: false }));
app.use(bodyP.json());

app.use(cors({
    origin: 'http://localhost:8080',
}))

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
require('./routes/signup')(app)

//Login Function
require('./routes/signin')(app)

//Edit profile Function
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
//Change password
app.post('/editP', (req, res, next) => {
    var name = req.body.name;
    var password = req.body.password;
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

//Delete product

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

//Show all Product

app.get('/product/getAll', async (req, res, next) => {
    try {
        const results = await product.find();
        res.send(results);
    } catch (err) {
        console.log(err.message);
    }
})


//app.use('/api', apiRoutes);
app.get('/', (req, res, next) => {
    res.json('Quang Duong ngu lon');
});


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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Test chuc nang tao & them du lieu vao database */
//Tao Schema User
const user = require('./models/user');
const data = new user({ uid: 'ST43938', name: 'QuangDuongdien', password: 'bikhung123', firstname: 'Duong', lastname: 'Le', email: 'duongbede@gmail.com', address: 'o Ben Tre siu giau', products: '63976f00ca198c1552c99648' });
//data.save();
//Tao Schema Bid
const bid = require('./models/bid');
const data3 = new bid({ author: '63976ee8edf86c88a968395f', pid: '63976f00ca198c1552c99648', bidamount: '500', bidquantity: '1000' });
//data3.save();
//Tao Schema Feedback
const feedback = require('./models/feedback');
const data2 = new feedback({ name: 'Duy Lan vippro', subject: 'Nguyen hoi hoi la khung', desc: 'QD be de 1 ti xiu thoi', date: 'ngay 13/12 cho Phuc Huy di tao' });
//data2.save();
//Tao Schema Product
const product = require('./models/product');
const data1 = new product({ author: '63976ee8edf86c88a968395f', pname: 'Vinh Thien khong co bo', pdesc: 'cai nay la gi', amount: '1000', time: 'Ngay 3/11 ta bau cho tong thong Trump', category: '6398b502963783dc603f5a24', image: 'hinh n*de cua QD' });
//data1.save();
//Tao Schema Category
const category = require('./models/category');
const data4 = new category({ name: 'SACH XINH DEP TUYET VOI Lam NHA LAM ON DI MA' });
//data4.save();
//Tao Schema Cart
const cart = require('./models/cart');
const { removeAllListeners } = require("./models/user");
const { json } = require("express");
const data5 = new cart({ owner: '63976ee8edf86c88a968395f', total: '480', item: '63976f00ca198c1552c99648' });
//data5.save();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Signup Function
app.post('/signup', (req, res, next) => {
    var uid = req.body.uid;
    var name = req.body.name;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var address = req.body.address;

    user.findOne({
        uid: uid
    })
    user.create({
        uid: uid,
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
            res.status(500).json('UID khong hop le')
        })
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
    var uid = req.body.uid;

    user.findOne({
        uid: uid
    })
        .then(data => {
            if (data) {
                user.updateOne({
                    uid: uid
                }, {
                    name: 'quangduong'
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

app.get('/login', (req, res, next) => {
    res.json('login');
});
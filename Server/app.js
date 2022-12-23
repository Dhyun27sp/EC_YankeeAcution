const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyP = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')

app.use(bodyP.urlencoded({ extended: false }));
app.use(bodyP.json());

app.use(cors({
    origin: ['https://nodejslantnd.herokuapp.com/', 'http://localhost:8080']
}))

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:123@tmdtn2st7.nu0qeav.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) console.log("Connected to database !!!");
    else console.log("Connect ERROR");
})

if (process.env.NODE_ENV == "production") {
    app.use(express.static(__dirname + '/dist'));
    app.get("*", (req, res) => {
        res.sendFile(__dirname + "/dist/index.html");
    });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => { console.log(`Connection listen on port ${PORT}`) });


//Signin, Signup, Edit user
require('./routes/user/signup')(app)
require('./routes/user/signin')(app)
require('./routes/user/edit')(app)
require('./routes/user/editpassword')(app)


//Insert, Update, Delete and ShowAll product
require('./routes/product/insert')(app)
require('./routes/product/update')(app)
require('./routes/product/delete')(app)
require('./routes/product/show')(app)

//Tim theo id
//Product
require('./routes/product/findone')(app)
//User
require('./routes/user/findone')(app)

//Tim san pham theo category
require('./routes/product/findwcondition')(app)

app.get('/', (req, res, next) => {
    res.json('Hi im server');
});


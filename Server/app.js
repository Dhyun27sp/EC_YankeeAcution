const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyP = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken')

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
//app.use('/api', apiRoutes);
app.get('/', (req, res, next) => {
    res.json('Hi im server');
});


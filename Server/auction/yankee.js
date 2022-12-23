const product = require('../models/product')

product.find({
    id: '6398b5526439c3dce3c3806d'
})
    .then(data => {
        console.log(data);
    })
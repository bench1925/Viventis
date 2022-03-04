
const express = require('express');
const bodyparser = require('body-parser');


const app = express();

app.use(bodyparser.urlencoded({
    extended : true
}));

app.use(bodyparser.json());



app.listen(3000, () => {
    console.log('Express Server started at port : 3000');
});


app.use('/', 'label-maker.js');
const express = require('express');
app = express();
const port = 7865;

app.get('/', function (req, res) {
    return res.send('Welcome to the payment system');
});

app.listen(port, function () {
    console.log("API available on localhost port 7865");
});
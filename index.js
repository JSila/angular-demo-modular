var express = require('express');

var app = express();
app.use(express.static('.'));

app.get('/data', function (req, res) {
    setTimeout(function () {
        res.send('data');
    }, 3000);
});

app.listen(3000);

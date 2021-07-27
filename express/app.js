var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/start', function (req, res) {
    console.log("Le gestionnaire 'start' est appelé.");
    setTimeout(function () {
        res.send("Bonjour start");
    }, 10000);
});

app.get('/upload', function (req, res) {
    res.send('Bonjour Upload');
});

app.set('view engine','jade');
app.get('/jade', function (req, res) {
    res.render('index',{title:'mon document',message:'mon titre!'});
});

app.use(function (req, res, next) {
    res.status(404).send('Page introuvable');
});

app.listen(3000, function () {
    console.log('ex app listen on port 3000');
})
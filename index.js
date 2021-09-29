var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

//create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    // else create user
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => { 
            console.log(user);
            res.send(user);
        });
});


//all accounts
app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});

//deposit funds
app.get('/account/deposit/:email/:amount', function (req, res) {
    //adding money
    dal.update(req.params.email, req.params.amount).
      then((user) => {
          console.log(user);
          res.send(user);
      });
});

//withdraw funds
app.get('/account/withdraw/:email/:amount', function (req, res) {
    //adding money
    dal.update(req.params.email, -req.params.amount).
      then((user) => {
          console.log(user);
          res.send(user);
      });
});

app.get('/account/balance/:email', function (req, res) {
    //show balance
    dal.findOne(req.params.email).
      then((user) => {
          console.log(user);
          res.send(user);
      })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
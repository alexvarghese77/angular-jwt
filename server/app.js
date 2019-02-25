const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to node js'
  });
});

app.post('/api/post', verifyTocken, (req, res) => {
  //verify token with actual token

  jwt.verify(req.token, 'key', { expiresIn: '5s' }, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Its a post req',
        authData
      });
    }
  });
});

//jwt token will generate after successfull auth
app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    name: 'alex',
    email: 'alex.varghese77@gmail.com'
  };
  console.log(req.body);

  jwt.sign(req.body, 'key', (err, token) => {
    res.json({
      token
    });
  });
});

//Format of tocken
//authorization: Bearer token
//verify the token value
function verifyTocken(req, res, next) {
  const bearerHeader = req.headers['Authorization'];
  //check if the bearer is undefined
  console.log(typeof bearerHeader);

  if (typeof bearerHeader !== 'undefined') {
    let bearer = bearerHeader.split(' ');

    //get tocken from array
    const bearerToken = bearer[1];
    //set token
    req.token = bearerToken;

    //next middleware
    next();
  } else {
    //forbidden
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log('server started'));

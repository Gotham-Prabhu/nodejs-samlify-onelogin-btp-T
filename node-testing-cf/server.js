const passport = require('passport');
const { JWTStrategy } = require('@sap/xssec');
const xsenv = require('@sap/xsenv');
const express = require('express');
const app = express();

// XSUAA Middleware
passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));

app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

app.get('/welcome-gonzales', function (req, res) {
  res.send('Hello World!');
  console.log( 'Hello World sent to Browser at: ' + new Date() )
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('node-testing-cf is using Node.js version: ' + process.version);
  console.log('node app listening on port ' + port);
});
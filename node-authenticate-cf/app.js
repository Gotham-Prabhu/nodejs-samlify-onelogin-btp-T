// This is app.js
// ...
const sso = require('./routes/sso');
const express = require('express');
const app = express();

// ...
app.use('/sso', sso);
// ...

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('node-authenticate-cf is using Node.js version: ' + process.version);
  console.log('node app listening on port ' + port);
  })
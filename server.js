const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

require('./server/config/database');

app
  .use(parser.urlencoded({ extended: true }))
  .use(parser.json())
  .use(express.static(path.resolve('dist', 'github-battle-app')))
  .use('/api', require('./server/routes'))
  .use(require('./server/routes/catch-all.routes'))
  .listen(port, () => console.log(`github battle app listening on port ${port}`));

const gitHubUserRouter = require('./gh-users.routes');
const router = require('express').Router();

module.exports = router
  .use('/githubusers', gitHubUserRouter);

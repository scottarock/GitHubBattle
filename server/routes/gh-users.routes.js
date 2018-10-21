const router = require('express').Router();
const { gitHubUserController } = require('../controllers');

module.exports = router
  .get('/', gitHubUserController.index)
  .post('/', gitHubUserController.create)
  .get('/:userName', gitHubUserController.show);

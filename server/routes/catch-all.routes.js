const router = require('express').Router();
const path = require('path');

router.use('*', function(request, response) {
  response.sendFile(path.resolve('dist', 'github-battle-app', 'index.html'));
});

module.exports = router;

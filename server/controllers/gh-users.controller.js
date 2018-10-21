const GitHubUser = require('mongoose').model('GitHubUser');

module.exports = {

  index: function(request, response) {
    // get all the GitHub users from the database
    // sorts results from highest to lowest scores
    GitHubUser.find({}).sort('field -score')
      .then( ghUsers => response.json(ghUsers))
      .catch(console.log);
  },

  create: function(request, response) {
    // create a new GitHub user in our battle database
    GitHubUser.create(request.body)
      .then( ghUser => response.json(ghUser))
      .catch(console.log);
  },

  show: function(request, response) {
    GitHubUser.findOne({userName: request.params.userName})
      .then( ghUser => response.json(ghUser))
      .catch(console.log);
  }

}

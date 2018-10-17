const GitHubUser = require('mongoose').model('GitHubUser');

module.exports = {

  index: function(request, response) {
    // get all the GitHub users from the database
    GitHubUser.find({})
      .then( ghUsers => response.json(ghUsers))
      .catch(console.log);
  },

  create: function(request, response) {
    // create a new GitHub user in our battle database
    GitHubUser.create(request.body)
      .then( ghUser => response.json(ghUser))
      .catch(console.log);
  }

}

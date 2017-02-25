var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {
    passport.use(new GitHubStrategy({
        clientID : 'c793712ab8eede556948',
        clientSecret : '7baa2b44a046c63636b6447a0102abfdf1623570',
        callbackURL : 'http://localhost:3000/auth/github/callback'
    }, function(accessToken, refreshToken, profile, done){

    }
    ));
};
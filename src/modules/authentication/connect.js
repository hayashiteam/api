const { signUpResolver } = require('./resolvers');
const { createUserResolver } = require('../users');

exports.connect = (app) => {
  // TODO: So far we have "signUpResolver" which:
  // - validate user password strenght
  // - hash the password and store it on request body following Users schema definition
  // THEN comes "createUserResolver" which is the same resolver used for User creation (so password)
  // THEN it will come the resolver that will be responsible for assigning a "JWT" token on request.
  // - this same resolver will be used for "/sign-in" and (maybe) "/me", so think wisely!
  app.post('/authentication/sign-up', signUpResolver, createUserResolver /** TODO: TO COME! */);
};
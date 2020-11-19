const {
  createBlackNovemberResolver,
  serveCreatedBlackNovemberResolver,
  findBlackNovemberResolver,
  // deleteUserResolver,
  // findMyselfResolver,
  // findUserByIdResolver,
  // findUsersResolver,
  // serveCreatedUserResolver,
  // updateUserResolver,
} = require('./resolvers');
const { paginationMiddleware } = require('../../shared');

exports.connect = (app) => {
  app.route('/black-november')
    .get(paginationMiddleware, findBlackNovemberResolver)
    .post(createBlackNovemberResolver, serveCreatedBlackNovemberResolver);
};

// CONVENTION: Re-export each module.
module.exports = {
  authentication: { ...require('./authentication') },
  blackNovember: { ...require('./black-november') },
  health: { ...require('./health') },
  users: { ...require('./users') },
};

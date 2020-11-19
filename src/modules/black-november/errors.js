const { translate } = require('../../i18n');

// TODO: serve proper "statusCode" as done in "authorization.signInResolver".
const blackNovemberTranslatedValidationError = (req, res, { err, blackNovemberDoc }) => {
  const transformedBlackNovember = blackNovemberDoc.toObject();
  const error = translate.error(err, req.locale, transformedBlackNovember);

  return res.status(500).json(error);
};

module.exports = {
  blackNovemberTranslatedValidationError,
};

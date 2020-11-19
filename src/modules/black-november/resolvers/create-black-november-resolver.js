const { blackNovemberTranslatedValidationError } = require('../errors');
const { BlackNovemberModel } = require('../model');
const { sharedSanitizer } = require('../../../shared');

exports.createBlackNovemberResolver = async (req, res, next) => {
  const blackNovemberPayload = sharedSanitizer(req.body);
  const blackNovemberDoc = new BlackNovemberModel(blackNovemberPayload);

  try {
    const savedBlackNovember = await blackNovemberDoc.save();
    const transformedBlackNovember = savedBlackNovember.toObject();
    req.createdBlackNovember = transformedBlackNovember;

    next();
  } catch(err) {
    return blackNovemberTranslatedValidationError(req, res, { err, blackNovemberDoc });
  }
};

exports.serveCreatedBlackNovemberResolver =
  (req, res) => res.status(200).json(req.createdBlackNovember);

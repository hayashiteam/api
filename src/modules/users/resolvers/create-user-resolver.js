const { userTranslatedValidationError } = require('../errors');
const { UsersModel } = require('../model');
const { sharedSanitizer } = require('../../../shared');

exports.createUserResolver = async (req, res, next) => {
  const userPayload = sharedSanitizer(req.body);
  const userDoc = new UsersModel(userPayload);

  try {
    const savedUser = await userDoc.save();
    const transformedUser = savedUser.toObject();
    req.createdUser = transformedUser;

    next();
  } catch(err) {
    return userTranslatedValidationError(req, res, { err, userDoc });
  }
};

exports.serveCreatedUserResolver = (req, res) => res.status(200).json(req.createdUser);

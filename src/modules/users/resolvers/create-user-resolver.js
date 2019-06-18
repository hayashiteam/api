const { userTranslatedValidationError } = require('../errors');
const { UsersModel } = require('../model');
const { sharedSanitizer } = require('../../../shared');

exports.createUserResolver = async (req, res) => {
  const userPayload = sharedSanitizer(req.body);
  const userDoc = new UsersModel(userPayload);

  try {
    const savedUser = await userDoc.save();
    const transformedUser = savedUser.toObject();

    return res.status(200).json(transformedUser);
  } catch(err) {
    // TODO: add a middleware that catches unknown errors (sharedUnexpectedError).
    return userTranslatedValidationError(req, res, { err, userDoc });
  }
};

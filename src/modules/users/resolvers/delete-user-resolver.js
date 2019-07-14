const { isMongoId } = require('validator');

const { sharedUnexpectedError } = require('../../../shared');
const { userNotFoundError } = require('../errors');
const { UsersModel } = require('../model');

exports.deleteUserResolver = async (req, res) => {
  try {
    const userId = req.params.id;
    if (!isMongoId(userId)) return userNotFoundError(req, res);

    await UsersModel.deleteOne({ _id: userId });

    return res.status(200).end();
  } catch(err) {
    return sharedUnexpectedError(req, res, { err });
  }
};

const { BlackNovemberModel } = require('../model');
const { sharedUnexpectedError } = require('../../../shared');

exports.findBlackNovemberResolver = async (req, res) => {
  try {
    const users = await BlackNovemberModel.paginate(req.pagination);
    return res.status(200).json(users);
  } catch(err) {
    return sharedUnexpectedError(req, res, { err });
  }
};

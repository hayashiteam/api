const { BlackNovemberModel } = require('../model');
const { sharedUnexpectedError } = require('../../../shared');

exports.findBlackNovemberResolver = async (req, res) => {
  try {
    const blackNovembers = await BlackNovemberModel.paginate(req.pagination);
    return res.status(200).json(blackNovembers);
  } catch(err) {
    return sharedUnexpectedError(req, res, { err });
  }
};

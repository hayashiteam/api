
const mongoose = require('mongoose');

const {
  isAlreadyInUseValidator,
  isMatchingRegex,
  isRequiredValidator,
  paginationPlugin,
  sharedSchema,
  sharedValidate,
} = require('../../shared');

const blackNovemberSchema = new mongoose.Schema({
  cellphone: String,
  firstName: String,
  hasGotInTouch: Boolean,
});

// Middlewares
const BLACK_NOVEMBER_FIRSTNAME_REGEX = /^[A-Za-z]{3,24}$/;
const BLACK_NOVEMBER_CELLPHONE_REGEX = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{2}\)?[\s.-]?\d{5}[\s.-]?\d{4}$/;
const validationsMiddleware = async (blackNovemberDoc, next) => {
  const constraints = [
    ...['firstName', 'cellphone'].map(field => isRequiredValidator(field)),
    ...['cellphone'].map(field => isAlreadyInUseValidator(field)),
    isMatchingRegex('cellphone', BLACK_NOVEMBER_CELLPHONE_REGEX),
    isMatchingRegex('firstName', BLACK_NOVEMBER_FIRSTNAME_REGEX),
  ];
  const error = await sharedValidate(constraints, blackNovemberDoc);

  return next(error);
};

// Virtuals - https://mongoosejs.com/docs/api.html#document_Document-toObject
const transform = (doc, ret) => {
  const {
    __v, _id, // MongoDB default
    ...fields
  } = ret;

  return fields;
};

// Setup
blackNovemberSchema.add(sharedSchema);
blackNovemberSchema.plugin(paginationPlugin);
blackNovemberSchema.post('validate', validationsMiddleware);
blackNovemberSchema.set('toObject', {
  transform,
  virtuals: true // Expose "id" instead of "_id".
});

const BlackNovemberModel = mongoose.model('BlackNovember', blackNovemberSchema);

module.exports = {
  transform,
  blackNovemberSchema,
  BlackNovemberModel,
  BLACK_NOVEMBER_CELLPHONE_REGEX,
  BLACK_NOVEMBER_FIRSTNAME_REGEX,
};

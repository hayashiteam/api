const { matches } = require('validator');

// TODO: unit test
exports.isMatchingRegex = (field, regex) => (doc) => ({
  code: 'SHARED_ERROR_FIELD_IS_NOT_MATCHING_REGEX',
  field,
  // There's no canonical representation for a RegExp object in JSON.
  // We need to explicity send it as a string, otherwise,
  // JSON.stringify() will return an empty object for the regex.
  // https://stackoverflow.com/questions/12075927/serialization-of-regexp
  regex: regex.toString(),
  validator: () => {
    const isValid = matches(doc[field], regex);
    return isValid;
  },
});

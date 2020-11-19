const got = require('got');

const { validBlackNovemberFixture } = require('../../__fixtures__');
const { getRequestOptions, LOCALE } = require('../../../../../__helpers__');
const { translate } = require('../../../../../i18n');
const { isMatchingRegex } = require('../../../../../shared');

exports.fieldIsNotMatchingRegexTestcase = (field, regex, value) => ({
  title: `(500) must return a translated error when "${field}" of value "${value}" does not match the regex "${regex}"`,
  test: async (t) => {
    const blackNovemberPayload = { ...validBlackNovemberFixture, [field]: value };

    return got(t.context.testcaseUrl, {
      ...getRequestOptions(t),
      body: blackNovemberPayload,
    })
    .catch(error => {
      const { validator, ...err } = isMatchingRegex(field, regex)(blackNovemberPayload);

      t.assert(error.response.statusCode == 500);
      t.deepEqual(error.response.body, translate.error(err, LOCALE, blackNovemberPayload));
    });
  },
});

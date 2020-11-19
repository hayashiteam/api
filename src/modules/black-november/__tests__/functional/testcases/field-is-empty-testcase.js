const got = require('got');

const { validBlackNovemberFixtureForTestcases } = require('../../__fixtures__');
const { getRequestOptions, LOCALE } = require('../../../../../__helpers__');
const { translate } = require('../../../../../i18n');
const { isRequiredValidator } = require('../../../../../shared');

exports.fieldIsEmptyTestcase = (field) => ({
  title: `(500) must return a translated error when providing an empty "${field}"`,
  test: (t) => {
    const blackNovemberPayload = {
      ...validBlackNovemberFixtureForTestcases(t),
      [field]: '',
    };

    return got(t.context.testcaseUrl, {
      ...getRequestOptions(t),
      body: blackNovemberPayload,
    })
    .catch(error => {
      const { validator, ...err } = isRequiredValidator(field)(blackNovemberPayload);
      t.assert(error.response.statusCode == 500);
      t.deepEqual(error.response.body, translate.error(err, LOCALE, blackNovemberPayload));
    });
  },
});

const got = require('got');

const { validBlackNovemberFixture } = require('../../__fixtures__');
const { getRequestOptions, LOCALE } = require('../../../../../__helpers__');
const { translate } = require('../../../../../i18n');
const { BlackNovemberModel } = require('../../../model');
const { isAlreadyInUseValidator } = require('../../../../../shared');

exports.fieldIsAlreadyInUseTestcase = (field, value) => ({
  title: `(500) must return a translated error when "${field}" is already in use by another "black november user"`,
  test: async (t) => {
    const blackNovember1 = { ...validBlackNovemberFixture, [field]: value };
    const blackNovember2 = { ...validBlackNovemberFixture, [field]: value };
    await new BlackNovemberModel(blackNovember1).save();

    return got(t.context.testcaseUrl, {
      ...getRequestOptions(t),
      body: blackNovember2,
    })
    .catch(async error => {
      const { validator, ...err } = isAlreadyInUseValidator(field)(blackNovember2);
      t.assert(error.response.statusCode == 500);
      t.deepEqual(error.response.body, translate.error(err, LOCALE, blackNovember2));
    });
  },
});

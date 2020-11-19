const test = require('ava');
const got = require('got');
const theOwl = require('the-owl');

const database = require('../../../../database');
const {
  fieldIsAlreadyInUseTestcase,
  fieldIsEmptyTestcase,
  fieldIsNotMatchingRegexTestcase,
  notSettableFieldsAreIgnoredTestcase,
} = require('./testcases');
const {
  BlackNovemberModel,
  BLACK_NOVEMBER_CELLPHONE_REGEX,
  BLACK_NOVEMBER_FIRSTNAME_REGEX
} = require('../../model');
const {
  validBlackNovemberFixture,
} = require('../__fixtures__');
const {
  closeApiOpenedOnRandomPort,
  getRequestOptions,
  startApiOnRandomPort,
} = require('../../../../__helpers__');

// Setup
test.before('prepare: start api / connect to database', async t => {
  t.context.endpointMethod = 'post';
  t.context.endpointOriginalPath = '/black-november';

  await startApiOnRandomPort(t);
  await database.connect();
});
test.beforeEach('cleanup database', t => BlackNovemberModel.deleteMany());
test.after('create api docs (if enabled)', t => theOwl.createDocs());
test.after.always('teardown', t => closeApiOpenedOnRandomPort(t));

// Happy path tests
test('(200) must succeed on creating the "black november user" and return the newly created doc', async t => {
  const blackNovemberPayload = { ...validBlackNovemberFixture };

  const response = await got.post(t.context.endpointBaseUrl, {
    ...getRequestOptions(t),
    body: blackNovemberPayload,
  });

  const createdBlackNovember = response.body;
  t.assert(response.statusCode == 200);
  t.truthy(createdBlackNovember.id);
  Object.keys(blackNovemberPayload)
    .forEach(key => t.assert(createdBlackNovember[key] === blackNovemberPayload[key]));
});

test(notSettableFieldsAreIgnoredTestcase.title, t => {
  t.context.testcaseUrl = t.context.endpointBaseUrl;
  return notSettableFieldsAreIgnoredTestcase.test(t);
});

// Unhappy path tests
[
  { field: 'cellphone', value: '(12) 12345-6789' },
].forEach(({ field, value }) => {
  const testcase = fieldIsAlreadyInUseTestcase(field, value);

  test(testcase.title, t => {
    t.context.testcaseUrl = t.context.endpointBaseUrl;
    return testcase.test(t);
  });
});

[ 'cellphone', 'firstName' ].forEach(field => {
  const testcase = fieldIsEmptyTestcase(field);

  test(testcase.title, t => {
    t.context.testcaseUrl = t.context.endpointBaseUrl;
    return testcase.test(t);
  });
});

[
  { field: 'firstName', regex: BLACK_NOVEMBER_FIRSTNAME_REGEX, value: 'Le' },
  { field: 'firstName', regex: BLACK_NOVEMBER_FIRSTNAME_REGEX, value: 'Le onardo' },
  { field: 'firstName', regex: BLACK_NOVEMBER_FIRSTNAME_REGEX, value: 'Leonardo Sarmento' },
  { field: 'cellphone', regex: BLACK_NOVEMBER_CELLPHONE_REGEX, value: '(12) 12345678910' },
  { field: 'cellphone', regex: BLACK_NOVEMBER_CELLPHONE_REGEX, value: '(12) 1234-56789' },
].forEach(({ field, regex, value }) => {
  const testcase = fieldIsNotMatchingRegexTestcase(field, regex, value);

  test(testcase.title, t => {
    t.context.testcaseUrl = t.context.endpointBaseUrl;
    return testcase.test(t);
  });
});

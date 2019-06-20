const test = require('ava');
const got = require('got');
const theOwl = require('the-owl');

const database = require('../../../../database');
const {
  emailIsInvalidTestcase,
  fieldIsAlreadyInUseTestcase,
  fieldIsEmptyTestcase,
  fieldIsTooLongTestcase,
  notSettableFieldsAreIgnoredTestcase,
} = require('./testcases');
const { validUserFixture } = require('../__fixtures__');
const {
  LOCALE,
  closeApiOpenedOnRandomPort,
  getRequestOptions,
  startApiOnRandomPort,
} = require('../../../__helpers__');
const { UsersModel, USERS_USERNAME_MAX_LENGTH } = require('../../model');

// Setup
test.before('prepare: start api / connect to database', async t => {
  t.context.endpointMethod = 'post';
  t.context.endpointOriginalPath = '/users';

  await startApiOnRandomPort(t);
  await database.connect();
});
test.beforeEach('cleanup database', t => UsersModel.deleteMany());
test.after('create api docs (if enabled)', t => theOwl.createDocs());
test.after.always('teardown', t => closeApiOpenedOnRandomPort(t));

// Happy path tests
test('(200) must succeed on creating the user and return the newly created doc', async t => {
  const userPayload = { ...validUserFixture };

  const response = await got.post(t.context.endpointBaseUrl, {
    ...getRequestOptions(t),
    body: userPayload,
  });

  const createdUser = response.body;
  t.assert(response.statusCode == 200);
  t.truthy(createdUser.id);
  Object.keys(userPayload)
    .forEach(key => t.assert(createdUser[key] === userPayload[key]));
});

test(notSettableFieldsAreIgnoredTestcase.title, t => {
  t.context.testcaseUrl = t.context.endpointBaseUrl;
  return notSettableFieldsAreIgnoredTestcase.test(t);
});

// Unhappy path tests
test(emailIsInvalidTestcase.title, t => {
  t.context.testcaseUrl = t.context.endpointBaseUrl;
  return emailIsInvalidTestcase.test(t);
});

[
  { field: 'email', value: 'email@already-being-used.com' },
  { field: 'username', value: 'already-being-used' },
].forEach(({ field, value }) => {
  const testcase = fieldIsAlreadyInUseTestcase(field, value);

  test(testcase.title, t => {
    t.context.testcaseUrl = t.context.endpointBaseUrl;
    return testcase.test(t);
  });
});

[ 'email', 'username' ].forEach(field => {
  const testcase = fieldIsEmptyTestcase(field);

  test(testcase.title, t => {
    t.context.testcaseUrl = t.context.endpointBaseUrl;
    return testcase.test(t);
  });
});

[
  { field: 'username', maxLength: USERS_USERNAME_MAX_LENGTH },
].forEach(({ field, maxLength }) => {
  const testcase = fieldIsTooLongTestcase(field, maxLength);

  test(testcase.title, t => {
    t.context.testcaseUrl = t.context.endpointBaseUrl;
    return testcase.test(t);
  });
});

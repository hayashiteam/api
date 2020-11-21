const test = require('ava');
const got = require('got');
const theOwl = require('the-owl');

const database = require('../../../../database');
const {
  closeApiOpenedOnRandomPort,
  getRequestOptions,
  startApiOnRandomPort
} = require('../../../../__helpers__');
const { BlackNovemberModel } = require('../../model');
const { validBlackNovemberFixtures } = require('../__fixtures__');

// Setup
test.before('prepare: start api / connect to database', async t => {
  t.context.endpointOriginalPath = '/black-november';

  await startApiOnRandomPort(t);
  await database.connect();
});
test.beforeEach('cleanup database', t => BlackNovemberModel.deleteMany());
test.after('create api docs (if enabled)', t => theOwl.createDocs());
test.after.always('teardown', t => closeApiOpenedOnRandomPort(t));

// Tests
test('(200) must return paginated content if there are "black november users" from database', async t => {
  // To be sure the test result will not be affected by the amount of fixtures, we lock the test up to four fixtures.
  const blackNovemberUsers = [];
  const [ f1, f2, f3, f4 ] = validBlackNovemberFixtures;

  for (const fixture of [ f1, f2, f3, f4 ]) {
    const createdBlackNovemberUser = await BlackNovemberModel.create(fixture);
    const transformedBlackNovemberUser = createdBlackNovemberUser.toObject();

    blackNovemberUsers.push(transformedBlackNovemberUser);
  }

  const url1 = `${t.context.endpointBaseUrl}?l=2&p=1`;
  const response1 = await got(url1, getRequestOptions(t));
  t.assert(response1.statusCode === 200);
  t.deepEqual(response1.body, {
    docs: [ blackNovemberUsers[0], blackNovemberUsers[1] ],
    hasNextPage: true,
    hasPreviousPage: false,
    nextPage: 2,
    previousPage: null,
    totalCount: 4,
    totalPages: 2,
  });

  const url2 = `${t.context.endpointBaseUrl}?l=2&p=2`;
  const response2 = await got(url2, getRequestOptions(t));
  t.assert(response2.statusCode === 200);
  t.deepEqual(response2.body, {
    docs: [ blackNovemberUsers[2], blackNovemberUsers[3] ],
    hasNextPage: false,
    hasPreviousPage: true,
    nextPage: null,
    previousPage: 1,
    totalCount: 4,
    totalPages: 2,
  });
});

test('(200) must return an empty array if there are no "black november users" on database', async t => {
  await BlackNovemberModel.deleteMany();

  // NOTE: Query parameters for pagination are optional. Default values are assigned on their absence.
  const response = await got(t.context.endpointBaseUrl, getRequestOptions(t));
  t.assert(response.statusCode === 200);
  t.deepEqual(response.body, {
    docs: [],
    hasNextPage: false,
    hasPreviousPage: false,
    nextPage: null,
    previousPage: null,
    totalCount: 0,
    totalPages: 0,
  });
});

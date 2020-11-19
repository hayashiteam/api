const validBlackNovemberFixture = {
  firstName: 'Leonardo',
  cellphone: '(12) 12345-6789',
};

const validBlackNovemberFixtures = [{
  firstName: 'Leonardo',
  cellphone: '(12) 12345-6789',
}, {
  firstName: 'Ana',
  cellphone: '(12) 98765-4321',
}, {
  firstName: 'Carlos',
  cellphone: '(12) 33333-2222',
}, {
  firstName: 'Felipe',
  cellphone: '(12) 11111-5555',
}, ];

// Must not include user's properties when updating, to properly isolate fields emptyness validations;
const validBlackNovemberFixtureForTestcases = (t) => (t.context.endpointMethod === 'post' ? validBlackNovemberFixture : {});

// Prefix all valid user properties values, to conveniently create new users using the same fixture.
const validPrefixedBlackNovemberFixture = (prefix) => Object.entries(validBlackNovemberFixture)
  .reduce((accumulator, [ key, value ]) => ({ ...accumulator, [key]: `${prefix}_${value}` }), {});

module.exports = {
  validPrefixedBlackNovemberFixture,
  validBlackNovemberFixture,
  validBlackNovemberFixtures,
  validBlackNovemberFixtureForTestcases,
};

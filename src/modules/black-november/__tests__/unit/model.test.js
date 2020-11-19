const test = require('ava');

const { transform, blackNovemberSchema } = require('../../model');
const { sharedSchema } = require('../../../../shared');

const deepClone = (object) => JSON.parse(JSON.stringify(object));
const blackNovemberSchemaFields = deepClone(blackNovemberSchema.tree);

test('"blackNovemberSchema" must inherit some fields from other schemas', t => {
  [ sharedSchema ].forEach(inheritedSchema => {
    const inheritedSchemaFields = deepClone(inheritedSchema.tree); // NOTE: Only works with schema fields defined as "{}" (e.g. "{ type: String }").

    Object.entries(inheritedSchemaFields)
      .forEach(([ key, value ]) =>
        t.deepEqual(blackNovemberSchemaFields[key], value, `Field "${key}" should be inherited by "blackNovemberSchema".`)
      );
  });
});

test('(transform) must strip "__v" and "_id" from doc', t => {
  const fieldsNotToBeStripped = {
    id: '123',
    firstName: 'email@domain.com',
    cellphone: 'username'
  };

  const doc = {}; // The mongoose document which is being converted
  const ret = { // The plain object representation which has been converted
    ...fieldsNotToBeStripped,

    __v: 0,
    _id: 'must be stripped',
  };

  t.deepEqual(transform(doc, ret), fieldsNotToBeStripped);
});

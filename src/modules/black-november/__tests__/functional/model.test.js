const test = require('ava');

const database = require('../../../../database');
const { BlackNovemberModel } = require('../../model');

test.before(t => database.connect());
test.beforeEach(t => BlackNovemberModel.deleteMany({}))

const getBlackNovembersSavedOnDatabase = () => BlackNovemberModel.find({});
test('user creation must succeeds', async t => {
  t.assert((await getBlackNovembersSavedOnDatabase()).length === 0);

  await new BlackNovemberModel({
    firstName: 'Leonardo',
    cellphone: '(12) 99999-9999',
  }).save();

  t.assert((await getBlackNovembersSavedOnDatabase()).length === 1);
});

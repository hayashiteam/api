const test = require('ava');

const { isTooLongValidator } = require('../../is-too-long-validator');

test(`validator must return "false" when field has exceeded a specific amount of characters`, t => {
  const maxLength = 24;
  [
    { username: 'a'.repeat(maxLength + 1) },
    { email: 'b'.repeat(maxLength + 2) },
    { randomField: 'c'.repeat(maxLength + 3) },
  ].forEach(userDoc => {
    const [ field ] = Object.keys(userDoc);
    t.false(
      isTooLongValidator(field, maxLength)(userDoc).validator()
    );
  });
});

const bcrypt = require('bcrypt');

const password = '123456789';   // change this to your new password
const saltRounds = 10;

bcrypt.hash(password, saltRounds).then(hash => {
  console.log('Paste this into MongoDB passwordHash field:\n', hash);
  process.exit(0);
});

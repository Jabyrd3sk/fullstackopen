const bcrypt = require('bcrypt');

const password = '123456789';  // change to your new password

bcrypt.hash(password, 10).then(hash => {
  console.log('Hashed password:', hash);
});

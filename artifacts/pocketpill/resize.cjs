const sharp = require('sharp');
sharp('public/logo.png')
  .resize(64, 64)
  .toFile('public/favicon.png')
  .then(() => console.log('done'))
  .catch(err => console.error(err));

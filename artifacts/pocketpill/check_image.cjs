const fs = require('fs');
try {
  const buffer = fs.readFileSync('public/logo.png');
  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  console.log(`Width: ${width}, Height: ${height}`);
} catch (e) {
  console.error(e);
}

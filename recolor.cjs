const { Jimp } = require('jimp');

async function recolor() {
  try {
    // Read the logo
    const logo = await Jimp.read('public/logo.png');
    
    // Iterate over all pixels
    logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // If the pixel is not completely transparent and not pure white
      // (assuming the logo is mostly orange and white)
      // Orange is high red, medium green, low blue.
      // We'll just check if it's reddish/orange (red > 100, blue < 100) or just anything not white.
      if (alpha > 0) {
        // If it's not white (r,g,b > 200)
        if (!(red > 200 && green > 200 && blue > 200)) {
          // Stripe Blurple is #635BFF -> rgb(99, 91, 255)
          // To keep some anti-aliasing shading, we can mix it based on intensity, 
          // or just flat replace it since logos are usually solid.
          // Let's just flat replace the color but keep the alpha.
          this.bitmap.data[idx + 0] = 99;  // R
          this.bitmap.data[idx + 1] = 91;  // G
          this.bitmap.data[idx + 2] = 255; // B
        }
      }
    });
    
    await logo.write('public/logo.png');
    console.log('Logo recolored successfully.');

    // Do the same for favicon
    const favicon = await Jimp.read('public/favicon.png');
    favicon.scan(0, 0, favicon.bitmap.width, favicon.bitmap.height, function(x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      if (alpha > 0) {
        if (!(red > 200 && green > 200 && blue > 200)) {
          this.bitmap.data[idx + 0] = 99;
          this.bitmap.data[idx + 1] = 91;
          this.bitmap.data[idx + 2] = 255;
        }
      }
    });
    
    await favicon.write('public/favicon.png');
    console.log('Favicon recolored successfully.');

  } catch (err) {
    console.error(err);
  }
}

recolor();

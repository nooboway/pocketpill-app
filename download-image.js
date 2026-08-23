import puppeteer from 'puppeteer';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { URL } from 'url';

(async () => {
  console.log('Launching puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  
  const query = encodeURIComponent('Venchecker 4-in-1 test kit');
  const searchUrl = `https://www.google.com/search?q=${query}&tbm=isch`;
  
  console.log(`Navigating to ${searchUrl}...`);
  await page.goto(searchUrl, { waitUntil: 'networkidle2' });
  
  console.log('Finding image...');
  // Find the first image thumbnail
  await page.waitForSelector('img');
  
  const imgUrl = await page.evaluate(() => {
    // Get all images
    const imgs = Array.from(document.querySelectorAll('img'));
    // Find the first one that looks like a product image (not a google logo)
    for (const img of imgs) {
      if (img.src && img.src.startsWith('http') && !img.src.includes('googlelogo')) {
        return img.src;
      }
    }
    return null;
  });
  
  if (!imgUrl) {
    console.error('Could not find an image URL.');
    await browser.close();
    process.exit(1);
  }
  
  console.log(`Found image URL: ${imgUrl.substring(0, 50)}...`);
  
  // Download the image
  const destPath = path.resolve('src/assets/venchecker.jpeg');
  
  if (imgUrl.startsWith('data:image/')) {
    // It's a base64 string
    const base64Data = imgUrl.replace(/^data:image\/jpe?g;base64,/, '').replace(/^data:image\/png;base64,/, '').replace(/^data:image\/webp;base64,/, '');
    fs.writeFileSync(destPath, base64Data, 'base64');
    console.log(`Saved base64 image to ${destPath}`);
  } else {
    // It's a regular URL
    const file = fs.createWriteStream(destPath);
    https.get(imgUrl, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close();
        console.log(`Saved image to ${destPath}`);
      });
    }).on('error', function(err) {
      fs.unlink(destPath, () => {});
      console.error(`Error downloading image: ${err.message}`);
    });
  }

  await browser.close();
})();

const fs = require('fs');

async function scrape() {
  try {
    const res = await fetch('https://onehealthng.com/products/venchecker-4-in-1-rapid-test-kit', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const text = await res.text();
    // find first jpg or png link that contains venchecker
    const imgMatches = text.match(/https?:\/\/[^"']+(?:venchecker|test)[^"']*\.(?:jpg|png|jpeg)/gi);
    
    if (imgMatches && imgMatches.length > 0) {
      console.log(`Found URL: ${imgMatches[0]}`);
      const imgRes = await fetch(imgMatches[0]);
      const buffer = await imgRes.arrayBuffer();
      fs.writeFileSync('src/assets/venchecker.jpeg', Buffer.from(buffer));
      console.log('Successfully downloaded image to src/assets/venchecker.jpeg');
      return;
    }
    console.log('No venchecker image found in HTML');
  } catch (err) {
    console.error(err);
  }
}

scrape();

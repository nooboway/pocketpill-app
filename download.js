import fs from 'fs';
import https from 'https';

const url = "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/8002024/1.jpg?0382";

https.get(url, (res) => {
  const path = "src/assets/venchecker.jpeg";
  const filePath = fs.createWriteStream(path);
  res.pipe(filePath);
  filePath.on('finish', () => {
    filePath.close();
    console.log('Download Completed'); 
  });
});

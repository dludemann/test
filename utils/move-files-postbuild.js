const fs = require('fs');
fs.readdir('./content', 'utf8', function (err, files) {
  if (err) {
    console.log(err);
    return;
  }

  fs.readFile('./utils/booking-files.json', 'utf8', function (err, dataFile) {
    if (err) {
      console.log(err);
      return;
    }

    const pagesArray = JSON.parse(dataFile);

    for (let i = 0; i < pagesArray.length; i++) {
      const bookingPageFile = pagesArray[i];

      for (let j = 0; j < files.length; j++) {
        const file = files[j];

        if (file === bookingPageFile) {
          let oldPath = `content/${file}`;
          let newPath = `content/book/${file}`;

          fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
            console.log(`✅ Successfully moved to ${newPath}`);
          });
        }
      }
    }
  });
});

const fs = require('fs');
fs.readdir('./content/book', 'utf8', function (err, dir) {
  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.stringify(dir);

  fs.writeFile('./utils/booking-files.json', data, function (err) {
    if (err) {
      console.log(err);
      return;
    }
  });
  for (let i = 0; i < dir.length; i++) {
    const file = dir[i];

    var oldPath = `content/book/${file}`;
    var newPath = `content/${file}`;

    fs.rename(oldPath, newPath, function (err) {
      if (err) throw err;
      console.log(`✅ Successfully moved to ${newPath}`);
    });
  }
});

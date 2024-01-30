const fs = require('fs');
// read theme color from _data/site.json
fs.readdir('./content/dil-mil/', 'utf8', function (err, files) {
  if (err) {
    console.log(err);
    return;
  }

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    fs.readFile(
      `./content/dil-mil/${file}`,
      'utf8',
      function (err, fileContents) {
        if (err) {
          console.log(err);
          return;
        }

        const iteration = i + 1;
        const headerStringUntrimmed = fileContents.split('<h2>')[iteration];
        const headerStringDirty = headerStringUntrimmed?.split('</h2>')[0];
        const headerString = headerStringDirty
          ?.replaceAll('</span>', '')
          .replaceAll('<span>', '');
        const headerStringSlug = headerStringDirty
          ?.toLowerCase()
          .replaceAll(' ', '-')
          .replaceAll(/[?.]/g, '')
          .replaceAll('</span>', '')
          .replaceAll('<span>', '')
          .replaceAll(/[0-9]/g, '');

        const stringToReplace = '<h2>' + headerStringDirty + '</h2>';

        const newFileContents = fileContents.replace(
          stringToReplace,
          `<h2 id="${headerStringSlug}"><a href="#${headerStringSlug}">${headerString}</a></h2>`
        );

        fs.writeFile(`./content/dil-mil/${file}`, newFileContents, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log(`Successfully wrote ${file}`);
        });
      }
    );
  }
});

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Define the path to the "content" folder
const dirPath = path.join(__dirname, "content");

// Get all .md files in the directory and its subdirectories
glob(`${dirPath}/**/*.md`, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Go through each file
  files.forEach((file) => {
    // Read the file's content
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // Replace all instances of "https://photostma.blob.core.windows.net/marketing" with "http://images.thematchartist.com"
      const result = data.replace(
        /https:\/\/photostma\.blob\.core\.windows\.net\/marketing/g,
        "/image-proxy"
      );

      // Write the modified content back to the file
      fs.writeFile(file, result, "utf8", (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});

console.log("Image URLs updated successfully!");

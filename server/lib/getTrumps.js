const fs = require('fs');
const imagesPath = `${__dirname}/../assets/trumps`;

module.exports = () => {
  const files = fs.readdirSync(imagesPath);

  return files.map((file) => {
    return {
      id: file.replace('.png', ''),
      fileName: file,
    }
  });
};

const imagesPath = `${__dirname}/../assets/trumps`;

module.exports = (faceNum) => {
  return `${imagesPath}/${faceNum}.png`
};

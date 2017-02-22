const Promise = require('bluebird');
const jimp = require('jimp');
const getTrump = require('./getTrump');
const getRandomTrump = require('./getRandomTrump');

module.exports = async (face, buffer, mimeType, faceNum) => {
  let trumpPath;

  if (faceNum) {
    trumpPath = getTrump(faceNum);
  } else {
    trumpPath = getRandomTrump();
  }

  const image = await jimp.read(buffer);
  const trump = await jimp.read(trumpPath);

  // get vars

  const enlargeAmount = 130;
  const x = face.getX() - (enlargeAmount / 2);
  const y = face.getY() - (enlargeAmount / 2);
  const width = face.getWidth() + enlargeAmount;
  const height = face.getHeight() + enlargeAmount;

  // resize

  trump.contain(width, height);

  // add to image

  image.composite(trump, x, y);

  // return buffer

  return await Promise.promisify(image.getBuffer).call(image, mimeType);
};

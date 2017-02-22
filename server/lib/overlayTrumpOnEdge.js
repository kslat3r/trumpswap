const Promise = require('bluebird');
const jimp = require('jimp');
const getRandomTrump = require('./getRandomTrump');

module.exports = async (buffer, mimeType) => {
  const trumpPath = getRandomTrump();

  const image = await jimp.read(buffer);
  const trump = await jimp.read(trumpPath);

  // rotate

  trump.rotate(-30, jimp.RESIZE_BEZIER);

  // add to image

  const x = image.bitmap.width - 200;
  const y = image.bitmap.height - 200;

  image.composite(trump, x, y);

  // return buffer

  return await Promise.promisify(image.getBuffer).call(image, mimeType);
};

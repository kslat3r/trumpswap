const imagesPath = `${__dirname}/../assets`;
const numImages = 6;

module.exports = () => {
  const randomNumber = Math.floor((Math.random() * numImages) + 1);

  return `${imagesPath}/${randomNumber}.png`
};

const imagesPath = `${__dirname}/../assets/trumps`;
const numImages = 12;

module.exports = () => {
  const randomNumber = Math.floor((Math.random() * numImages) + 1);

  return `${imagesPath}/${randomNumber}.png`
};

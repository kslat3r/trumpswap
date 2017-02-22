const getFaces = require('./getFaces');
const overlayTrumpOnFace = require('./overlayTrumpOnFace');
const overlayTrumpOnEdge = require('./overlayTrumpOnEdge');

module.exports = async (buffer, mimeType, faceNum) => {
  const faces = await getFaces(buffer);

  if (!faces) {
    return Promise.reject('Could not open buffer');
  }

  if (faces.length) {
    for (let i in faces) {
      buffer = await overlayTrumpOnFace(faces[i], buffer, mimeType, faceNum);
    }
  } else {
    buffer = await overlayTrumpOnEdge(buffer, mimeType, faceNum);
  }

  return Promise.resolve(buffer);
};

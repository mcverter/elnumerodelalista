const shareables = require("./tj.json").placemarks;
console.log('shareables', shareables)
const center = {lat: 32.5364307, lng:-117.037085};
const zoom = 12;

export {shareables, center, zoom}

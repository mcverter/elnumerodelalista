const {placemarks} =require('./tj');

placemarks.forEach(place=>{
  console.log(getNameAddress(place));
});

function getNameAddress(place) {
  return `${place.name}, ${place.address}`
}
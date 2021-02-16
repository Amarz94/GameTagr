var gis = require('g-i-s');
gis('Call of Duty', formatReviews);

function formatReviews(error, results) {
  if (error) {
    console.log(error);
  }
  else {
    const gameImg = [results[1].url]
    console.log(gameImg)
  }
}

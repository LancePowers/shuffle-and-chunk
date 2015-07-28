var studentArray = ["Alex", "Amber", "Ashley", "Ben", "Bradley", "Brandon", "Charles", "Chip", "Crystal", "Dominic", "Erik", "Ethan", "Jeff", "Johnny", "Keith", "Kierston", "Kyle", "Lance", "Lucy", "Luis", "Patrick", "Pete", "Robert", "Ryan", "Sarah", "Suhayl", "Yusef", "Zoe"];

function shuffle(array){
  var newArray = array.slice(0);
  var shuffledArray = [];
  while (newArray.length) {
    var rand = Math.floor(Math.random() * newArray.length);
    shuffledArray.push(newArray.splice(rand,1)[0]);
  }
  return shuffledArray;
}

function chunk(chunkNum,arrayIn){
  var firstArray = shuffle(arrayIn);
  var chunkedArray = [];
  while(firstArray.length){
      chunkedArray.push(firstArray.splice(0,chunkNum));
  }
  return chunkedArray;
}

var chiffre = [0,1,2,3,4,5,6,7,8,9];

function comb2() {
  var array = [];
  for (var i = 0; i < chiffre.length; i++) {
    for (var j = 0; j < chiffre.length; j++) {
      for (var k = 0; k < chiffre.length; k++) {
        for (var l = 0; l < chiffre.length; l++) {
          if (chiffre[i] + '' + chiffre[j] < chiffre[k] + '' + chiffre[l]) {
            array.push(chiffre[i] + "" + chiffre[j] + " " + chiffre[k] + "" + chiffre[l]);
          }
        }
      }
    }
  }
  var result = array.join(', ');
  return result;
}

console.log(comb2());
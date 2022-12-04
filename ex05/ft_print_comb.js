function chiffrediff() {
  var array=[]
  for (var i = 0; i < 10; i++) {
    for (var j = i + 1; j < 10; j++) {
      for (var k = j + 1; k < 10; k++) {
          array+= [i] + [j] + [k] + '. ';
      }
    }
  }
  console.log(array);
}
chiffrediff();
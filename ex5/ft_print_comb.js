const chiffres = Array.from({ length: 10 }, (_, i) => i);
const result = [];

for (const a of chiffres) {
  for (const b of chiffres) {
    for (const c of chiffres) {
      if (a === b & a === c & b === c) continue;

      const finded = result.find(
        (search) =>
          search === a.toString() + b.toString() + c.toString(), 
          search === a.toString() + c.toString() + b.toString(), 
          search === b.toString() + a.toString() + c.toString(), 
          search === b.toString() + c.toString() + a.toString(), 
          search === c.toString() + a.toString() + b.toString() ||
          search === c.toString() + b.toString() + a.toString()
      );

      if (finded) {
        console.log("degagge", finded, a, b, c);
        continue;
      }

      result.push(a.toString() + b.toString() + c.toString());
    }
  }
}
// À test
console.log(result)

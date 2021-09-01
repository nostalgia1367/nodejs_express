const ages = [11, 12, 13, 16, 21, 31];

const up16 = ages.filter(age => age > 16);
const down16 = ages.filter(age => age < 13)
const between10And21 = ages.filter(age => age > 10 && age < 21);

console.log('up16:', up16);
console.log('down16:', down16);
console.log('between10And21:', between10And21);

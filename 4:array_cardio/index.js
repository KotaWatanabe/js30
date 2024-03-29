const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
/**
 * 1. Filter the list of inventors for those who were born in the 1500's
 * Array.prototype.filter()
 */
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year <= 1599);
// console.table(fifteen);

/**
 * 2. Give us an array of the inventors' first and last names
 * Array.prototype.map()
 */
const fullNames = inventors.map(inventor => inventor.first +' '+inventor.last);
// console.table(fullNames);

/**
 * 3. Sort the inventors by birthdate, oldest to youngest
 * Array.prototype.sort()
**/
inventors.sort((a,b) => a.year > b.year ? 1 : -1);
// console.table(inventors);

/**
 * 4. How many years did all the inventors live?
 * Array.prototype.reduce()
 **/
const inventorsLive = inventors.reduce((accumulator, currentValue) => {
  return accumulator + (currentValue.passed-currentValue.year);
},0);
// console.log(inventorsLive);

/**
 * 5. Sort the inventors by years lived
 **/
// Ans 1
// inventors.forEach(item => {
//     item.lived = item.passed - item.year;
// });
// inventors.sort((a,b) => (a.passed-a.year) - (b.passed-b.year));
// console.table(inventors);
// Ans 2
const oldest = inventors.sort(function(a,b){
  const lastOne = a.passed - a.year;
  const nextOne = b.paased - b.year;
  return lastOne > nextOne ? -1 : 1;
});
// console.table(oldest);

/**
 * 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
 * https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 **/

// const aElement = Array.from(document.querySelectorAll('.mw-category a'))
// const list = aElement.map(item => item.textContent)
//                   .filter(item => item.includes('de'))
// console.table(list)

const people = [
    "Beck, Glenn",
    "Becker, Carl",
    "Beckett, Samuel",
    "Beddoes, Mick",
    "Beecher, Henry",
    "Beethoven, Ludwig",
    "Begin, Menachem",
    "Belloc, Hilaire",
    "Bellow, Saul",
    "Benchley, Robert",
    "Benenson, Peter",
    "Ben-Gurion, David",
    "Benjamin, Walter",
    "Benn, Tony",
    "Bennington, Chester",
    "Benson, Leana",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William"
];

/**
 * 7. sort Exercise
 * Sort the people alphabetically by last name
 **/
const alpha = people.sort((lastOne,nextOne) => {
  const [aLast,aFirst] = lastOne.split(', ');
  const [bLast,bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 :-1;
});
// console.log(alpha);

const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck"
];

/**
 * 8. Reduce Exercise
 * Sum up the instances of each of these
 **/
const transportaion = data.reduce(function(obj, item){
  if(!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
},{});
console.log(transportaion);

// let type = [{economy: 4000},
//     {midsize:10000},
//     {luxury : 20000}
// ];

let calculateRent = (days,type) => {
    let total;
   if ( type === 1) {
      total = 4000 * days;
   }
   if ( type === 2) {
      total = 10000 * days;
   }
   if ( type === 3) {
      total = 20000 * days;
   }

   return total;
}


console.log(calculateRent(4,1))



//optimized
let rates = {
    economy: 4000,
    midsize: 10000,
    luxury: 20000
  };
  
let calculateRent2 = (days, type) => {
     return rates[type] * days;
};

console.log(calculateRent2(4, 'economy'));
console.log(calculateRent2(3, 'luxury'));  
  
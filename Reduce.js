// const numbers = [5, 7, 8, 9];

// const res = numbers.reduce((prev, number) => {
//   return prev + number;
// }, 0);

// console.time("REduce");
// var j = res.reduce(
//   function (acc, value) {
//     for (let i = 0; i < array.length; i++) {
//       if (value.res > acc[i]) {
//         acc[i] = value.res;
//         break;
//       }
//     }
//     return acc;
//   }[(5, 7, 8, 9)]
// );

// console.log(res);
// console.timeEnd("REduce");
// console.time("Sort");
// c.sort(function (a, b) {
//   return b.res - a.res;
// });
// console.timeEnd("Sort");

// const numbers = [1, 1, 2004];

// const int = numbers.reduce((prev, number) => {
//   return prev + number;
// }, 0);

// console.log("toTal:", int);

// const array = [{ res: 5 }, { res: 7 }, { res: 8 }, { res: 9 }];

// console.time(" REduce");
// const bigNumber = array.reduce(
//   (acc, item) => {
//     if (item.res > acc[0]) {
//       acc[0] = item.res;
//       acc.sort((a, b) => b - a);
//     }
//     return acc;
//   },
//   [0, 0]
// );
// console.timeEnd(" REduce");

// console.log(bigNumber);

// console.time("Sort");
// array.sort((a, b) => b.res - a.res);
// console.timeEnd("Sort");

// console.log("Sorted array:", array);

const numbers = [5, 7, 8, 9];

console.time("Reduce");
const sum = numbers.reduce((prev, number) => {
  return prev + number;
}, 0);
console.timeEnd("Reduce");

console.log("Sum:", sum);

const array = [{ res: 5 }, { res: 7 }, { res: 8 }, { res: 9 }];

console.time("Find Top 2");
const top2 = array.reduce(
  (acc, item) => {
    if (item.res > acc[0]) {
      acc[0] = item.res;
      acc.sort((a, b) => b - a);
    }
    return acc;
  },
  [0, 0]
);
console.timeEnd("Find Top 2");

console.log("Top 2 values:", top2);

console.time("Sort");
array.sort((a, b) => b.res - a.res);
console.timeEnd("Sort");

console.log("Sorted array:", array);

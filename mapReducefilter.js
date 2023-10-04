// // /** map function */

// //const inputs = [1,2,4,6,7,8,9,10];

// // const squreArray = inputs.map(function (num){
// //     return num * num;
// // })

// // console.log(squreArray)

// // //using Arrow function

// // const squreArray1 = inputs.map((num) => num * num);

// // console.log(squreArray1);

// // Reduce Function
// // Syntax: deduce(redFn, initial value)
// // function redFn(accumalator, currentvalue, index, arr)

// // const sum = inputs.reduce((total, num, index) => {
// //     console.log(total, index)
// //     return total + num ;
// // },0)

// // console.log(sum);

// // if we use the initial value then index start from 0 if not start from 1

// /** Filter Function */

// const input = [1,4,5,-2,-3,-4,8,9]

// const positives = input.filter(noNegative);

// function noNegative(num){
//     return num > 0;
// }

// console.log(`Original Array: ${input}`)
// console.log(`Only positive Numbers: ${positives}`);

// const negative = input.filter((num) => num < 0);
// console.log(`Only Negative Numbers: ${negative}`)
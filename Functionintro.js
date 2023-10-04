// /** Function in js */

// // // Function declaration
// // console.log(sum(5,6));

// // function sum(a, b){
// //     return a + b;
// // }




// // // Function Expression


// // const sum2 = function(a, b){
// //     return a * b;
// // }
// // console.log(sum2(5,6))



// // console.log(square(5));

// // var square = function(x){
// //     return x * x;
// // }
// // console.log(square(5));

// // Arrow Function

// // 1rst Way
// // var prod = (num1, num2) => num1 * num2 ;
// // console.log(prod(2, 4));

// // // 2nd Way
// // var prod = (num1, num2) => {
// //    return num1 * num2 ;

// // }
// // console.log(prod(2, 4));


// // Argument Objects in arrow function

// // var func1 = (a, b, c) =>{
// //     console.log(arguments[0])

// //     console.log(arguments[1])

// //     console.log(arguments[2])
// // }

// // func1(1, 2, 3)



// // IIFE (Imediate Invoke Function Expression)

// (function(a, b){
//     console.log(a ** b);
// })(4,2);

// // if we want to return 

// const user = (function(){
//     const userData = {
//         userName: 'Nil',
//         userAge: 30,
//     };

//     function getName(){
//         console.log(userData.userName);
//     }

//     function getAge(age){
//         console.log(userData.userAge + age);
//     }

//     return {getName, getAge}
// })();

// console.log(user)
// user.getName();
// user.getAge(10);


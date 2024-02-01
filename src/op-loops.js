'use strict';

// //Operators
// let a = 20;
// let b = 30;
// // a = a + 2;
// a += 2;
// a /= 11;
// a *= 10;
// // a %= 10;
// a **= 3;

// // b = b + 1
// b += 1;
// b++;
// b--;
// ++b;
// --b;

// console.log(50 - ++b);
// console.log(b)
// console.log(50 - --b);
// console.log(b)
// let ms = 60;
// let kms = 50;
// let myRate = 40;
// // if (myRate >= kms || myRate >= ms ){
// //   console.log('I am a kms');
// //   }else if (myRate >= ms){
// //     console.log('I am a ms');
// //   }else{
// //     console.log('I am a just sportsman');
//   // }
// let res = myRate >= kms || myRate >= ms
//                   ?console.log('I am a ms')
//                   :console.log('I am a just sportsman')
//   let result = myRate >= kms || myRate >= ms || kms > ms;
//   // console.log(result);

// let c = 0;
// console.log(c || 10);
// console.log(c ?? 20);

// let year = Number(prompt('Enter year, pls'));
// console.log(year);
// // console.log(isNaN)
// if (Number.isNaN(year)) {
//   console.log('Entered wrong data');
// } else if (year % 100 === 0) {
//   if (year % 400 === 0) {
//     console.log('It is a leap year');
//   }else{
//     console.log('It is not a leap year');
//   }
// }else if(year % 4 === 0 && year > 4){
//
// }else{
//   console.log('It is not a leap year');
// }
// if (Number.isNaN(year)) {
//   console.log('Entered wrong data');
// } else {
//   year % 4 === 0 &&
//     (year % 100 !== 0 || year % 400 === 0) &&
//     year > 4 &&
//     console.log('It is a leap year');

//   (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) && year > 4) ||
//     console.log('It is not a leap year');
// }

// let count = 12;
// while(count < 10){
//   console.log(count);
//   count++;
// }

// do{
//   console.log(count);
//   count--;
// }while(count < 10);

// for(let i = 1; i < 10 ; i++ ){
//   if(i === 5) continue;
// console.log(`${i * 2}`);
// }

// outer: for (let i = 1; i < 10; i++) {
//   inner: for (let j = 1; j < 10; j++) {
//   if (i === 5) continue outer;
//   if (j === 5) continue;
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }
first: for (let i = 1; i <= 100; i++){
  for (j = 1; j < i; j++);
  if(i % j === 0) continue first;
}
  console.log(`${i}`)

// общий вид функции
// const <name> = (<argument>) => {
//   return <expressions>;
// };

// ///////////////////////////////////////

// ******Пример определения 
// const surfaceAreaCalculator = (radius) => {   //radius — это аргумент функции surfaceAreaCalculator.
//   return 4 * 3.14 * radius * radius;
// }
// ******** и вызова функции
// const surfaceOfMars = surfaceAreaCalculator(3390);

// *****работа функции 
// 4 * 3.14 * radius * radius;
// 4 * 3.14 * 3390 * 3390;
// 12.56 * 3390 * 3390;
// 42578.4 * 3390;
// 144340776;

// Функция возвращает число 144340776. 

// const surfaceOfMars = surfaceAreaCalculator(3390);
// const surfaceOfMars = 144340776;
// ///////////////////////////

// const percentageCalculator = (number, total) => {
//   return number * 100 / total;
// }
// Эта функция принимает два числа и возвращает процент. Задать ей 40 и 80, она вернёт 50, потому что 40 это 50% от 80



//Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: a² + 2 * a * b + b².
//squareOfSum(2, 3) // 25
//squareOfSum(1, 10) // 121
const squareOfSum =(a,b) => {
  return (a**2) + 2 * a * b + (b**2);
}

console.log(squareOfSum (2,3));
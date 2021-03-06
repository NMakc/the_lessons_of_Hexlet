Общий вид рекурсии поиска факториала числа n
const sum1 = (n) => {
    if (n === 1) {
      return 1;
    }  
    return n + sum1(n - 1);
  };
  
  const sum2 = n => (n === 1) ? 1 : n + sum2(n - 1);

  n!- n факториал
  3! - 1*2*3


Функция sum принимает целое положительное число n и возвращает сумму всех чисел, входящих в интервал [1, n]:

const sum = (n) => {
  if (n === 1) {
    return 1;
  }

  return n + sum(n - 1);
};
sum(5);
работает как 
5 + (4 + (3 + (2 + 1)))



Реализуйте (с использованием рекурсивного процесса) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

import sequenceSum from './sequenceSum';

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
Подсказки
Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
Сумма чисел последовательности, в которой begin === end, равна begin (или end)

const sequenceSum = (begin, end) => {
    // BEGIN (write your solution here)
    if (begin > end){
      return NaN;
     }else if (begin === end){
        return begin;
     } 
      return begin + sequenceSum(begin + 1, end);
      // END
  };
Суть итеративного процесса — вычисление с фиксированным количеством состояний.

const factorial = (n) => {
  const iter = (counter, acc) => {
    if (counter === 1) {
      return acc;
    }
    return iter(counter - 1, counter * acc);
  };

  return iter(n, 1);
};

Идея:

Считаем от n до 1
Берем число из предыдущего шага
Умножаем это число на текущее число
Передаем его в новый шаг
Когда counter достигает 1, число передаётся из предыдущего шага в ответ
Нам нужно с чего-то начать, потому что шаг 2 требует число из предыдущего шага, и мы начинаем с 1, потому что тогда n * 1 будет просто n:

return iter(n, 1);
Вот так выглядят вызовы iter, когда происходит вычисление 3!:

iter(3, 1);   // iter(3 - 1, 1 * 3);
iter(2, 3);   // iter(2 - 1, 2 * 3);
iter(1, 6);   // counter === 1, return 6
6;
Итеративный процесс в целом:
Определить начальное состояние. В нашем случае мы делаем первый вызов iter с n и 1. Это начальное состояние.
​Проверить терминальный сценарий. Мы убеждаемся, что counter это 1 и останавливаем рекурсию, когда он достигает значения 1.
​Определить новое состояние. Это то, как продвигается процесс. В нашем случае мы делаем ещё один вызов iter с уменьшенным counter и умноженным accumulator. Два этих новых числа определяют новое состояние.
Повторить шаг 2.​
Резюме
Рекурсия — это когда что-то содержит себя в своём описании.
Рекурсивный процесс — это процесс обработки данных с отложенными вычислениями.
Итеративный процесс — это процесс вычисления, когда состояние может быть описано фиксированным количеством значений.

Функция sum принимает целое положительное число n и возвращает сумму всех чисел, входящих в интервал [1, n]:

const sum = (n) => {
  if (n === 1) {
    return 1;
  }

  return sum(n - 1) + n;
};

sum(5);

/// ни хрена не полнял... надо вернуться и подумать!!!!!!!!!!!!!1
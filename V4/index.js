export default (string) => {
// ## 1 шаг
// Выведите количество записей с данными в переданном файле.
  const data = string.split('\n');
  // Удаляем первую (заголовок) и последнюю строки, получаем только строки с данными о блюдах
  const rows = data.slice(1, data.length - 1);
  // Выводим общее количество блюд
  console.log(`Количество автомобилей: ${rows.length}`);

  // ## 2 шаг
  // Средний пробег всех авто, значение округлить
  const rowsStep2 = rows.map((line) => line.trim());
  // Переменная для подсчета стоимости всех авто
  let totalMileage = 0;
  // Проходимся по каждой строке, извлекая из неё пробег автомобиля и прибавляем её к общей сумме
  for (let i = 0; i < rowsStep2.length; i++) {
    const parts = rowsStep2[i].split(',');
    totalMileage += parseFloat(parts[4]);
  }
  // Вычисляем средний пробег автомобиля, округляя до ближайшего целого
  const count = rowsStep2.length;
  const averagePrice = Math.round(totalMileage / count);
  console.log(`Средний пробег: ${averagePrice}`);

  // ## 3 Шаг
  // Выведите стоимость самой дорогой машины.
  const prices = rowsStep2.map((row) => Number(row.split(',')[7]));
  const priceMax = Math.max(...prices);
  console.log(`Стоимость самой дорогой машины: ${priceMax}`);

  // ## 4 шаг
  // Выведите марку и модель автомобиля с самым ранним годом выпуска.
  const rows4 = string.trim().split('\n').slice(1); // убираем строку заголовков

  let oldestYear = Infinity; // установим начальное значение как бесконечность
  let oldestCar;

  rows4.forEach((row) => {
    const [brand, model, year] = row.split(',');
    if (Number(year) < oldestYear) {
      oldestYear = Number(year);
      oldestCar = { brand, model };
    }
  });

  console.log(`Самый старый автомобиль: ${oldestCar.brand} ${oldestCar.model}`);
  // ## 5 шаг

  // Выведите все встречающиеся цвета автомобилей и количество их нахождений в файле.
  // Например, если цвет "Blue" встречается 3 раза, то вывод будет "Blue":3.

  const rows5 = string.trim().split('\n').map((line) => line.replace('\r', '')).slice(1); // убираем строку заголовков
  const colorsCount = {};
  rows5.forEach((row) => {
    const color = row.split(',')[8];
    if (colorsCount[color]) {
      colorsCount[color]++;
    } else {
      colorsCount[color] = 1;
    }
  });
  const output = Object.entries(colorsCount)
    .map(([color, count]) => `${color}: ${count}`)
    .join(', ');

  console.log(`Все цвета: ${output}`);
};

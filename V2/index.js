export default (string) => {
  // Разбиваем входную строку на массив строк по символу переноса строки.
  const data = string.split('\n');

  // Шаг 1: Вывод общего количества строк в данных.
  
  // Удаляем первую строку (заголовок) и последнюю строку (если она пустая) для получения только строк с данными.
  const rows = data.slice(1, data.length - 1);

  // Выводим общее количество строк с данными о валютах.
  console.log(`Count: ${rows.length}`);

  // Шаг 2: Вывод тикеров валют.

  // Удаляем пробелы и переносы строки на концах каждой строки.
  const lines = string.trim().split('\n').slice(1);

  // Из каждой строки извлекаем код валюты.
  const categories = lines.map((line) => line.split(';')[3]);

  // Оставляем только уникальные коды валют (чтобы избежать дубликатов).
  const uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index);

  // Выводим список уникальных кодов валют.
  const result = `Currency codes: ${uniqueCategories.sort().join(', ')}`;
  console.log(result);

  // Шаг 3: Находим минимальное и максимальное значения стоимости валют.

  // Из каждой строки извлекаем стоимость валюты и преобразуем ее в число.
  const prices = lines.map(row => Number(row.split(';')[4]));

  // Находим максимальное значение стоимости.
  const priceMax = Math.max(...prices);

  // Находим минимальное значение стоимости.
  const priceMin = Math.min(...prices);

  // Выводим найденные минимальное и максимальное значения.
  console.log(`Cost of currency: Min: ${priceMin}, Max: ${priceMax}`);

  // Шаг 4: Вывод количества валют со стоимостью между 10 и 30.

  // Фильтруем массив цен, оставляя только те, что лежат между 10 и 30.
  const qntyCurrency = prices.filter((price) => price >= 10 && price <= 30);

  // Выводим количество таких валют.
  console.log(`Count currency between 10 and 30: ${qntyCurrency.length}`);

  // Шаг 5: Подсчет среднего значения для валют USD, EUR и CHF.

  // Инициализируем счетчики для суммы и количества найденных значений.
  let sum = 0;
  let count = 0;

  // Проходимся по всем строкам и проверяем код валюты. Если это USD, EUR или CHF, добавляем их стоимость к сумме и увеличиваем счетчик.
  for (let i = 0; i < data.length; i++) {
    let line = data[i];
    let parts = line.split(';');
    let currency = parts[3];
    let value = parseFloat(parts[4]);

    if (currency === 'USD' || currency === 'EUR' || currency === 'CHF') {
        sum += value;
        count++;
    }
  }

  // Вычисляем среднее арифметическое и округляем его в меньшую сторону.
  let average = Math.floor(sum / count);

  // Выводим среднее значение.
  console.log(`Arithmetic mean for USD, EUR, CHF is ${average}`);
}

export default (string) => {
  // Разбиваем строку на массив строк
  const data = string.split('\n');

  // Удаляем первую (заголовок) и последнюю строки, получаем только строки с данными о блюдах
  const rows = data.slice(1, data.length - 1);

  // Выводим общее количество блюд
  console.log(`Count: ${rows.length}`);

  // Удаляем пробелы и переносы строки на концах, затем разбиваем строку на массив строк
  const lines = string.trim().split('\n').slice(1);

  // Из каждой строки извлекаем категорию блюда
  const categories = lines.map((line) => line.split(',')[1]);

  // Оставляем только уникальные категории (фильтруем массив)
  const uniqueCategories = categories.filter((value, index, self) => self.indexOf(value) === index);

  // Выводим список уникальных категорий
  const result = `Categories: ${uniqueCategories.join(', ')}`;
  console.log(result);

  // Разбиваем строку на массив строк снова для следующего шага
  const lines2 = string.trim().split('\n');
  let totalCost = 0;

  // Проходимся по каждой строке, извлекая из неё цену блюда и прибавляем её к общей сумме
  for (let i = 1; i < lines2.length; i++) {
    const parts = lines2[i].split(',');
    totalCost += parseFloat(parts[4]);
  }

  // Вычисляем среднюю стоимость блюда, округляя до ближайшего целого
  const count = lines2.length - 1;
  const averagePrice = Math.round(totalCost / count);

  // Выводим среднюю стоимость
  console.log(`Average price: ${averagePrice}`);

  // Разбиваем строку на массив строк еще раз для следующего шага
  const menuLines = string.trim().split('\n');

  let minCalories = Infinity;
  let maxCalories = -Infinity;
  let minCaloriesDish = '';
  let maxCaloriesDish = '';

  // Проходимся по каждой строке, определяя блюдо с минимальным и максимальным количеством калорий
  menuLines.slice(1).forEach((line) => {
    const [name, , , cal] = line.split(',');
    const calories = parseInt(cal.replace(' ккал', ''), 10);

    if (calories < minCalories) {
      minCalories = calories;
      minCaloriesDish = name;
    }

    if (calories > maxCalories) {
      maxCalories = calories;
      maxCaloriesDish = name;
    }
  });

  // Выводим блюда с минимальным и максимальным количеством калорий
  console.log(`Calories: min - ${minCaloriesDish}, max - ${maxCaloriesDish}`);

  // Удаляем заголовок
  menuLines.shift();

  let mostProfitableDish = '';
  let cheapestPricePerGram = 1000000;

  // Проходимся по каждой строке, определяя наиболее выгодное блюдо (с наименьшей стоимостью за грамм)
  for (let i = 0; i < menuLines.length; i++) {
    const line = menuLines[i];
    const elements = line.split(',');
    const dishName = elements[0];
    const gramString = elements[2];
    const priceString = elements[4];

    const grams = parseInt(gramString.replace(' г', ''));
    const price = parseFloat(priceString);

    const pricePerGram = price / grams;

    if (pricePerGram < cheapestPricePerGram) {
      cheapestPricePerGram = pricePerGram;
      mostProfitableDish = dishName;
    }
  }

  // Выводим наиболее выгодное блюдо
  console.log('Most profitable dish:', mostProfitableDish);
};

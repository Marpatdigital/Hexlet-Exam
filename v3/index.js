export default (string) => {
//## 1 шаг
//Посчитайте количество существ в таблице  // Разбиваем входную строку на массив строк по символу переноса строки.
  const data = string.split('\n');

  // Шаг 1: Вывод общего количества строк в данных.
  
  // Удаляем первую строку (заголовок) и последнюю строку (если она пустая) для получения только строк с данными.
  const rows = data.slice(1);

  // Выводим общее количество строк с данными о валютах.
  console.log(`Count: ${rows.length}`);
// 2 Шаг 
// Выведите все виды замков существ через запятую. 
// Сделайте так, чтобы имя каждого замка начиналось с большой буквы. Отсортируйте список перед выводом.
// Castles: Замок, Оплот
const lines2 = string.trim().split('\n').slice(1);

// Из каждой строки извлекаем типы замков.
const categories = lines2.map((line) => line.split(' ')[1]);

// Приводим текст к нужному формату
const capitalizedArr = categories.map(word => {
    const lowercased = word.toLowerCase();
    return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
  });

// Оставляем только уникальные коды валют (чтобы избежать дубликатов).
  const uniqueCategories = capitalizedArr.filter((value, index, self) => self.indexOf(value) === index);

// Выводим список уникальных кодов валют.
  const result = `Castles: ${uniqueCategories.sort().join(', ')}`;
  console.log(result);

// ## 3 шаг
// Выведите существо с самым большим здоровьем.
// Largest hp: ангел

const rows3 = string.trim().split('\n').slice(1); // убираем строку заголовков

let maxHp = -Infinity; // установим начальное значение как бесконечность
let maxHpUnit;
// создаём объект с атрибутами 
rows3.forEach((row) => {
  const [ level, castle, creature, damage, health, speed, cost] = row.split(' ');
  if (maxHp < Number(health)) {
    maxHp = Number(health);
    maxHpUnit = {level, castle, creature, damage, health, speed, cost};
  }
});
console.log(`Largest hp: ${maxHpUnit.creature}`);
// ## 4 шаг
// Выведите средний арифметический урон для каждого существа в таблице. 
// Если цифры две, то их нужно сложить и разделить на 2. Если цифра одна - просто вернуть ее.

// Разделяем исходную строку на строки
const lines = string.split('\n').slice(1); // удаляем первую строку с заголовками

let results = [];

lines.forEach(line => {
    const parts = line.split(' ');
    const creatureName = parts[2];
    const damageData = parts[3];

    const damageParts = damageData.split('-');
    let avgDamage;

    if (damageParts.length === 2) {
        avgDamage = (parseFloat(damageParts[0]) + parseFloat(damageParts[1])) / 2;
    } else {
        avgDamage = parseFloat(damageParts[0]);
    }

    results.push(`${creatureName}: ${avgDamage}`);
});

const result4 = "Average damage: " + results.join(", ");
console.log(result4);

// ## 5 шаг
// Найдите самое сильное существо. Вам следует найти всех существ 7 уровня и выяснить, 
// кто из них быстрее исчерпает здоровье врага своими атаками. 
// Атаку нужно посчитать как среднее значение между мнимальным и максимальным уроном. 
// Важно(!) - таких существ всегда 2. 
// C технической точки зрения вам нужно посчитать у кого из существ уйдет меньше атак для того, чтобы исчерпать здоровье врага.
// Strongest creature: ангел
// Входные данные: строка со всей информацией о существах

// Не решил
}


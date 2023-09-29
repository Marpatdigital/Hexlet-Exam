export default(string) => {

//## 1 шаг
//Выведите количество звезд в переданном файле.
// Разбиваем входную строку на массив строк по символу переноса строки.
const data = string.split('\n');
// Удаляем первую строку (заголовок) и последнюю строку (если она пустая) для получения только строк с данными.
const rows = data.slice(2);
// Выводим общее количество строк с данными о валютах.
  console.log(`Count: ${rows.length}`);

// ## 2 Шаг
// Выведите список разных галактик, которые есть в таблице. 
// Галактики должны быть отсортированы в алфавитном порядке.

 // Удаляем пробелы и переносы строки на концах каждой строки.
  const lines = string.trim().split('\n').slice(2);
  // Из каждой строки извлекаем код валюты.
  const galaxies = lines.map((line) => line.split(' |')[1]);
  // Оставляем только уникальные коды валют (чтобы избежать дубликатов).
  const uniqueGalaxies = galaxies.filter((value, index, self) => self.indexOf(value) === index);
  // Выводим список уникальных кодов валют.
  const result = `Galaxies:${uniqueGalaxies.sort().join(',')}`;
  console.log(result);


  // Шаг 3 
  // Выведите самое большое расстояние от звезды из таблицы до Земли и самое маленькое.
  // Farest from Earth: 2500000 light years, closest to Earth: 4.24 light years

  // Из каждой строки извлекаем стоимость валюты и преобразуем ее в число.
  const distance = rows.map(row => Number(row.split('|')[5]));

  // Находим максимальное значение стоимости.
  const distanceMax = Math.max(...distance);

  // Находим минимальное значение стоимости.
  const distanceMin = Math.min(...distance);
console.log(`Farest from Earth: ${distanceMax} light years, closest to Earth: ${distanceMin} light years`);

// Шаг 4 
// Выведите имя самой близкой к земле звезды и галактику, к которой она относится.
// Closest to Earth: Proxima Centauri in Млечный путь galaxy

const rows4 = string.trim().split('\n').slice(2); // убираем строку заголовков
let closestToEarth = Infinity; // установим начальное значение как бесконечность
let closestGalaxy;

rows4.forEach((row) => {
  const [trash, star, galaxy, mass, radius, range] = row.split('|');
  if (Number(range) < closestToEarth) {
    closestToEarth = Number(range);
    closestGalaxy = { trash, star, galaxy, mass, radius, range };
  }
});
//console.log(\);
console.log(`Closest to Earth: ${closestGalaxy.star.trim()} in ${closestGalaxy.galaxy.trim()} galaxy`);

// Шаг 5
// Выведите планету c наибольшим радиусом из галактики, общая масса звезд в которой имеет наибольший вес.
// Star with largest radius from heaviest galaxy is Andromeda XIX
// Очищаем строку
const rows5 = string.split('\n').slice(2); // Удаляем заголовки
let stars = rows5.map(row => {
    const cells = row.split('|').map(cell => cell.trim()).filter(Boolean);
    return {
        name: cells[0],
        galaxy: cells[1],
        mass: parseFloat(cells[2]),
        radius: parseFloat(cells[3])
    };
});
// Рассчитываем общую массу для каждой галактики.
let galaxyMasses = {};
stars.forEach(star => {
    if (!galaxyMasses[star.galaxy]) galaxyMasses[star.galaxy] = 0;
    galaxyMasses[star.galaxy] += star.mass;
});
// аходим галактику с наибольшей массой.
let heaviestGalaxy = null;
let maxMass = -Infinity;
for (const galaxy in galaxyMasses) {
    if (galaxyMasses[galaxy] > maxMass) {
        maxMass = galaxyMasses[galaxy];
        heaviestGalaxy = galaxy;
    }
}
// Находим звезду с наибольшим радиусом из данной галактики.
let largestRadiusStar = null;
let maxRadius = -Infinity;
stars.forEach(star => {
    if (star.galaxy === heaviestGalaxy && star.radius > maxRadius) {
        maxRadius = star.radius;
        largestRadiusStar = star;
    }
});
// Выводим результат.
console.log(`Star with largest radius from heaviest galaxy is ${largestRadiusStar.name}`);

}

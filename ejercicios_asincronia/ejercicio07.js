const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]

const rpgGames = videogames.filter(game => game.genders.find(gender => gender === "RPG"));

const averageScore = rpgGames.reduce((acc, game, index, array) => {
  acc += game.score;
  if (index === array.length - 1) {
    return acc / array.length;
  }
  return acc;
}, 0);

console.log(rpgGames);
console.log(averageScore);
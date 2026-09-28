//Este ejercicio pide que se retorne el miembro más antiguo. Hay varios que coinciden con el mismo año por lo que todos serían igual de antiguos, pero como lo pide en sigular, me he quedado con el primero que sale.
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  let oldest = xMen[0];
  for (let i = 0; i <  xMen.length; i++)    {
    const element = xMen[i];
    if(xMen[i].year < oldest.year){
        oldest = xMen[i];
    }
  }
  return oldest;
}

console.log(findOldestXMen(xMen));

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  if(capitals[country]){
    return "\nLa capital de '"+country+"' es: "+capitals[country]
  } else {
    return "\nNo se ha encontrado la capital del país especificado."
  }
}
console.log(getCapital("Spain"));
console.log(getCapital("Nicaragua"));


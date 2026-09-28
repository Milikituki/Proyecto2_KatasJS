const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];
const moviesByDecades = {}

for (let i = 0; i < starWarsMovies.length; i++) {
    const element = starWarsMovies[i];
    //Aquí para poder poner la década sin el año concreto, pasamos el año a String para poder después modificarlo con el slice (dejando los 3 primeros dígitos del año y añadiendo un 0)
    const year = element.releaseYear.toString();
    const decade = year.slice(0, 3) + '0'
    //Si la década no existe como clave, la creamos con un array vacío
    if(!moviesByDecades[decade]){
        moviesByDecades[decade] = [];
    }
    moviesByDecades[decade].push(element.title);
    //Aquí añadimos la película al array de su década concreta
}
console.log(moviesByDecades);

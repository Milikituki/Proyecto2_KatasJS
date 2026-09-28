const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const littleMovie = [];
const middleMovie = [];
const bigMovie = [];

const MinLengthMovie = 100;
const MaxLengthMovie = 200;

for (const element of movies) {
    if(element.durationInMinutes < MinLengthMovie){
        littleMovie.push(element.name)
    }
    if(element.durationInMinutes >= MinLengthMovie && element.durationInMinutes < MaxLengthMovie){
        middleMovie.push(element.name)
    }
    if(element.durationInMinutes >= MaxLengthMovie){
        bigMovie.push(element.name)
    }
}
console.log("Películas pequeñas:\n"+littleMovie+"\nPelídulas medianas:\n"+middleMovie+"\nPelículas grandes:\n"+bigMovie);

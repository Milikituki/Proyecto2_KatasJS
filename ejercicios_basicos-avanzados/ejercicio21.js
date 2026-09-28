const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

let underAge = [];
let ofAge = [];

for (const element of users) {
    
    if(element.years < 18){
       underAge.push(element.name)
    }
    if(element.years >= 18){
      ofAge.push(element.name)
    }

}
console.log("Usuarios menores de edad: \n"+underAge);
console.log("Usuarios mayores de edad: \n"+ofAge);


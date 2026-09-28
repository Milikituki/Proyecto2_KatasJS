const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList){
  //? inicializamos un string vacío para que, dentro del bucle, vaya cambiando su valor en cada comparación
    let largestWord = "";
    let element;
    for (let index = 0; index < stringList.length; index++) {
        //? element lo igualamos al elemento que toque dentro de la iteracion con el array
         element = stringList[index];
         //? si la longitud del elemento es igual a la longitud de la variable largestWord, guardamos dicho elemento en esa misma variable
         if (element.length > largestWord.length){ 
            largestWord = element
         }
    }
//? largestWord es la variable que contiene la palabra más larga que se ha ido asignando en el bucle
    console.log("La palabra más larga es: "+largestWord);
}

findLongestWord(avengers)
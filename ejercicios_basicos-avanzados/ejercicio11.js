const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
    let suma = 0;
  for(let i = 0; i < list.length; i++){
    let element = list[i];

    //? Con typeof podemos comparar si un elemento del array es de un tipo de dato u otro
    if (typeof element === 'number') {
        suma += element
    }
    if (typeof element === 'string'){
        suma += element.length
    }
  }
  console.log("El promedio de la lista es: "+(suma/list.length));
  
}

averageWord(mixedElements)
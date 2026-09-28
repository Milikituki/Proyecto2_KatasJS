const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  //? Inicializamos una variable "suma" a 0, para que después tome el valor que proceda en cada iteración del bucle
    let suma = 0;
  for (let i = 0; i < numberList.length; i++){
    //? Cada elemento del array lo guardamos en la varaible "element"
    let element = numberList[i];
    //? En cada iteración vamos sumando y guardando el valor en la variable "suma"
    suma += element
  }
  console.log("La suma de los elementos es: "+suma);
  
}

sumNumbers(numbers);
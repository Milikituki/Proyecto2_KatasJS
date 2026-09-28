const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
    let suma = 0;
  for(let i = 0; i < numberList.length; i++){
    suma += numberList[i];
  }

  console.log("La media de la lista de numeros es: "+suma/numberList.length);
  
}

average(numbers);
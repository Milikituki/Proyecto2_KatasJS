const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    let words = [];
    console.log("Veces que se repiten las palabras en el array: \n");
    
    for(let i = 0; i < list.length; i++){
    let counter = 0;
    let element = list[i];
    //? Este for es para volver a recorrer la lista y poder comparar con "element"
        for(let j = 0; j < list.length; j++){
            //? En este caso, los otros intems de la lista que no son el elemento seleccionado, serán la base sobre los que compararemos
            let base = list[j]
            //? Si el elemento seleccionado en la iteración es igual que el elemento (base) que toca durante esta iteración, sumamos al contador
            if(element === base){
                counter++;
                
            }
        }
        //? Para que al imprimir el resultado no nos imprima todas las veces las palabras repetidas, en el array vacío que hemos creado, iremos metiendo en cada vuelta las palabras que no estén ya incluidas en dicho array y luego lo imprimimos por consola (así queda más limpio)
    if (!words.includes(element)) {
        console.log(element+" -> "+counter);
        words.push(element)
    }
    
    }
}

repeatCounter(words)
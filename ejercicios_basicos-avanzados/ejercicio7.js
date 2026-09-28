function greaterNumber(numberOne, numberTwo) {
    console.log("Los numeros son: "+ numberOne+" y "+ numberTwo);
    
    if (numberOne > numberTwo) {
        console.log(numberOne +" es el más alto.");       
    } else if (numberOne < numberTwo){
        console.log(numberTwo + " es el más alto.");
    }
}

greaterNumber(25, 345);
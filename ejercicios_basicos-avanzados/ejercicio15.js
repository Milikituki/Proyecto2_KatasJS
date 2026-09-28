const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

function includesWord(list){
    console.log("Productos que incluyen la palabra 'Camiseta': \n");

    let newList = [];
    
    let word = 'Camiseta';
    for(let i = 0; i < list.length; i++){
        let element = list[i];
        if(element.includes(word)){
            newList.push(element);
        }
    }

    console.log(newList)
}

includesWord(products)
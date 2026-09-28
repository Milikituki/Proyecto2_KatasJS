const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  let newList = [];
  for (let index = 0; index < list.length; index++) {
    let element = list[index]
    //? Aquí sobre quien comparamos es sobre el nuevo array, de manera que si el elemento iterado no está en este nuevo array, se incluye. Por el contrario, si se encuentra dentro de él, no se pushea ningún elemento a este nuevo array.
    if(!newList.includes(element)){
      newList.push(element)
    }
  }  
    console.log(newList);
  
}

removeDuplicates(duplicates)
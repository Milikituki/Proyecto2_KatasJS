const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, nameToFind) {
  for(let i = 0; i < nameList.length; i++){
    if(nameList.indexOf(nameToFind) !== -1){
        console.log("El nombre buscado se encuentra en la posición "+nameList.indexOf(nameToFind));
        break
    } else if(nameList.indexOf(nameToFind) === -1){
          console.log("El nombre no se encuentra en la lista");
          break
        }    
   
  }
}

nameFinder(names, 'Jessica')
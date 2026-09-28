const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Luke"));

function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1)
  }
  return array;
}

console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Luke"));
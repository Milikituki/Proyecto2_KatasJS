const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let index = 0; index < foodSchedule.length; index++) {
    if(foodSchedule[index].isVegan === false){
        const newFruit = fruits.shift()
        foodSchedule[index] = {name: newFruit, isVegan: true};
    }
}
console.log(foodSchedule);

const pointsList = [32, 54, 21, 64, 75, 43];
const copyPointsList = [...pointsList];
console.log(copyPointsList);


const toy = {name: "Bus laiyiar", date: "20-30-1995", color: "multicolor"};
const copyToy = {...toy};
console.log(copyToy);


const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];
const allPoints = [...pointsList, ...pointsLis2];
console.log(allPoints);


const toy = {name: "Bus laiyiar", date: "20-30-1995", color: "multicolor"};
const toyUpdate = {lights: "rgb", power: ["Volar like a dragon", "MoonWalk"]};
const newToy = {...toy, ...toyUpdate};
console.log(newToy);


const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];
const newColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log(newColors);
console.log(colors);
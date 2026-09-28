const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul1 = document.createElement("ul");
countries.forEach(country => {
    const li = document.createElement("li");
    li.textContent = country;
    ul1.appendChild(li);
});
document.body.appendChild(ul1);


document.querySelector(".fn-remove-me").remove();


const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const printHereDiv = document.querySelector("[data-function='printHere']");
const ul3 = document.createElement("ul");
cars.forEach(car => {
    const li = document.createElement("li");
    li.textContent = car;
    ul3.appendChild(li);
});
printHereDiv.appendChild(ul3);


const countriesData = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" }
];

const container = document.createElement("div");
container.id = "cards-container";

countriesData.forEach(item => {
    const card = document.createElement("div");

    const h4 = document.createElement("h4");
    h4.textContent = item.title;

    const img = document.createElement("img");
    img.src = item.imgUrl;

    card.appendChild(h4);
    card.appendChild(img);
    container.appendChild(card);
});

document.body.appendChild(container);


const btnRemoveLast = document.createElement("button");
btnRemoveLast.textContent = "Eliminar último";
btnRemoveLast.addEventListener("click", () => {
    const lastCard = container.lastElementChild;
    if (lastCard) lastCard.remove();
});
document.body.appendChild(btnRemoveLast);


container.querySelectorAll("div").forEach(card => {
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Eliminar";
    btnDelete.addEventListener("click", () => {
        card.remove();
    });
    card.appendChild(btnDelete);
});
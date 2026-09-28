// 2.1 - Insertar un div vacío
const div1 = document.createElement("div");
document.body.appendChild(div1);


const div2 = document.createElement("div");
const p2 = document.createElement("p");
div2.appendChild(p2);
document.body.appendChild(div2);


const div3 = document.createElement("div");
for (let i = 0; i < 6; i++) {
    const p3 = document.createElement("p");
    div3.appendChild(p3);
}
document.body.appendChild(div3);


const p4 = document.createElement("p");
p4.textContent = "Soy dinámico!";
document.body.appendChild(p4);


document.querySelector("h2.fn-insert-here").textContent = "Wubba Lubba dub dub";


const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
apps.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    ul.appendChild(li);
});
document.body.appendChild(ul);


document.querySelectorAll(".fn-remove-me").forEach(element => {
    element.remove();
});


const divs = document.querySelectorAll("div");
const p8 = document.createElement("p");
p8.textContent = "Voy en medio!";
divs[0].insertAdjacentElement("afterend", p8);


document.querySelectorAll("div.fn-insert-here").forEach(element => {
    const p9 = document.createElement("p");
    p9.textContent = "Voy dentro!";
    element.appendChild(p9);
});
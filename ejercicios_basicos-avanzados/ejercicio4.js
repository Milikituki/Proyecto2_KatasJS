const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log(aldeanos[3]);
aldeanos.push("Cervasio");
console.log(aldeanos);

aldeanos[0] = "Bambina";
console.log(aldeanos);

aldeanos.reverse();
console.log(aldeanos);

aldeanos.splice(1,1, "Canela");
aldeanos.splice(4,1,"Canela");
console.log(aldeanos);

console.log(aldeanos[aldeanos.length-1]);






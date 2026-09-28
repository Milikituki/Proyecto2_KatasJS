
const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
    ];

const listaAlbumes = document.getElementById("lista-albumes");

albums.forEach(function(album){
    const li = document.createElement("li");
    li.textContent = album;
    listaAlbumes.appendChild(li);
});

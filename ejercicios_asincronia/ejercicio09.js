const randomNumber = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.sprites.other["official-artwork"].front_default;
    document.querySelector(".random-image").src = imageUrl;
  })
  .catch(error => console.error("Error", error));
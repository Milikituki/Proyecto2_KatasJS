const characterList = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((characters) => {
    const defaultOption = document.createElement("option");

    defaultOption.textContent = "Selecciona un personaje";
    defaultOption.value = "";
    characterList.appendChild(defaultOption);

    characters.forEach((character) => {
      const option = document.createElement("option");

      option.textContent = character.fullName;
      option.value = character.imageUrl;

      characterList.appendChild(option);
    });
  })
  .catch((error) => {
    console.log(error);
  });

characterList.addEventListener("change", (event) => {
  characterImage.src = event.target.value;
});
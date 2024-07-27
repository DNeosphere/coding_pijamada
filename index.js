(async () => {
  // HTML elements
  const $mainSection = document.querySelector(".main-section");

  // Get Data
  const getCharacters = async () => {
    const API_URL = "https://rickandmortyapi.com/api/character";
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };


  const createCharacters = (data, htmlToInsert) => {
    console.log(data)
    const characterHTMLElements = data.map((character) => {
      return /*html*/ `
      <div class="character-container">
        <div class="character-image">
          <img src="${character.image}">
        </div>
        <div class="character-description">
          <div>
            <h2>${character.name}</h2>
            <div>${character.status}</div>
          </div>
          <div>
            <div class="character-tag">Last known Location:</div>
            <p>${character.origin.name}</p>
          </div>
          <div>
            <div class="character-tag">First seen in:</div>
            <p>Episodio</p>
          </div>
        </div>
      </div>
    `;
    });

    htmlToInsert.innerHTML = characterHTMLElements.join("");
  };


  const characters = await getCharacters();

  createCharacters(characters.results, $mainSection)

})();

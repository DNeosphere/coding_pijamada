// HTML elements
const $mainSection = document.querySelector(".main-section");


// Get Data
const getCharacters = async () => {
  const API_URL = "https://rickandmortyapi.com/api/character"
  const response = await fetch(API_URL)


  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }
  const data = await response.json()
  return data
}

const characterTemplate = /*html*/`
<div class="character-container">
  <div class="character-image">
    <img> 
  </div>
  <div class="character-description">
    <div>
      <h2>Nombre</h2>
      <div>Status</div>
    </div>
    <div>
      <div class="character-tag">Last known Location:</div>
      <p>Location</p>
    </div>
    <div>
      <div class="character-tag">First seen in:</div>
      <p>Episodio</p>
    </div>
  </div>
</div>
`
$mainSection.innerHTML = characterTemplate


getCharacters()
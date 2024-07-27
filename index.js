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




getCharacters()
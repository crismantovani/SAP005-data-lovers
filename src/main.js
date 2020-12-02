//import { pokemon } from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const pokemonsArray = data.pokemon
function cards (array) {
    let card = ""
    for (let pokemon of array) {
        card += `
        <article class="card">
          <h3 class="card-title">${pokemon.name}</h3>
          <img class="card-image" src=${pokemon.img}>
          <p class="card-type">${pokemon.type}</p>
          <p class="card-rarity">${pokemon.rarity}</p>
        </article>`
    }
    return card
}

const cardSection = document.getElementById("container-main")
cardSection.innerHTML = cards(pokemonsArray)

function filter () {
  let chosenType = document.getElementById("chosen-type").value
  let filterResult = pokemonsArray.filter(pokemon => {
  return pokemon.type.includes(chosenType)
})
const cardSectionFilter = document.getElementById("container-filter")
cardSectionFilter.innerHTML = cards(filterResult) 
}

let buttonFilter = document.getElementById("filter")
buttonFilter.addEventListener ("click", filter)
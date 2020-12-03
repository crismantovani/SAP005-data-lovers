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

function filterType (event) {
  event.preventDefault()
  let chosenType = document.getElementById("chosen-type").value
  let filterResult = pokemonsArray.filter(pokemon => {
  return pokemon.type.includes(chosenType)
})
const cardSectionFilter = document.getElementById("container-filter")
cardSectionFilter.innerHTML = cards(filterResult) 
}

let buttonFilter = document.getElementById("filter-type")
buttonFilter.addEventListener ("click", filterType)

function filterRarity (event) {
  event.preventDefault()
  let chosenRarity = document.getElementById("chosen-rarity").value
  let filterRarityResult = pokemonsArray.filter(pokemon => {
  return pokemon.rarity.includes(chosenRarity)
})
const cardSectionRarityFilter = document.getElementById("container-filter")
cardSectionRarityFilter.innerHTML = cards(filterRarityResult) 
}

let buttonFilterRarity = document.getElementById("filter-rarity")
buttonFilterRarity.addEventListener("click", filterRarity)


/*function sortPokemonAZ () {
  let orderAZ = (a,b) => (a["name"]).localeCompare(b["name"]);
  return pokemonsArray.sort((a, b) => orderAZ(a,b));
}

function sortPokemonZA () {
  let orderZA = (a,b) => (a["name"]).localeCompare(b["name"]);
  return pokemonsArray.sort((a, b) => orderZA(a,b)).reverse(); 
}*/

function sortPokemon (event) {
  event.preventDefault()
  let chosenOrder = document.getElementById("chosen-order").value
  let order = (a,b) => (a["name"]).localeCompare(b["name"]);
  let assortmentAZ = "";
  let assortmentZA = "";

  if (chosenOrder === "AaZ") {
    let assortmentAZ = pokemonsArray.sort((a,b) => {
      return order(a,b)
  })
  const cardOrder = document.getElementById("container-filter")
  cardOrder.innerHTML = cards(assortmentAZ)
}
  if (chosenOrder === "ZaA") {
    let assortmentZA = pokemonsArray.sort((a, b) => {
      return order(a,b)
    })
    assortmentZA.reverse()
    const cardOrder = document.getElementById("container-filter")
    cardOrder.innerHTML = cards(assortmentZA)
}
  //document.getElementById("container-filter") = []
  const cardOrder = document.getElementById("container-filter")
  cardOrder.innerHTML = cards(assortment)
}


let buttonOrder = document.getElementById("pokemon-order")
buttonOrder.addEventListener ("click", sortPokemon)




/*function sortPokemon () {
  let chosenOrder = document.getElementById("chosen-order").value
  let order = (a,b) => (a["name"]).localeCompare(b["name"]);
  
  if (chosenOrder === "AaZ") {
    return pokemonsArray.sort((a, b) =>  order(a,b));
  } else {
    return pokemonsArray.sort((a, b) =>  order(a,b)).reverse();
  }
const cardOrder = document.getElementById("container-main")
cardOrder.innerHTML = sortPokemon() }

let buttonOrder = document.getElementById("pokemon-order")
buttonOrder.addEventListener ("click", sortPokemon)*/
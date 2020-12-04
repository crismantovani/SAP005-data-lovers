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

function cardsInfo (array) {
  let cardInfo = ""
  for (let pokemon of array) {
      cardInfo += `
      <article class="card-info">
        <p class="card-type">${pokemon.num}</p>
        <h3 class="card-title">${pokemon.name}</h3>
        <img class="card-image" src=${pokemon.img}>
        <p class="card-type">${pokemon.type}</p>
        <p class="card-rarity">${pokemon.rarity}</p>
        <p class="card-type"><strong>Fraquezas:</strong></p>
        <p class="card-type">${pokemon.weaknesses}</p>
        <p class="card-type"><strong>Ataque:</strong> ${pokemon.stats.attack}</p>
        <p class="card-type"><strong>Defesa:</strong> ${pokemon.stats.defense}</p>
        <p class="card-type"><strong>Stamina:</strong> ${pokemon.stats.stamina}</p>
      </article>`
  }
  return cardInfo
}


function filterType (event) {
  event.preventDefault()
  let chosenType = document.getElementById("chosen-type").value
  let filterResult = pokemonsArray.filter(pokemon => {
  return pokemon.type.includes(chosenType)
})
let percentageCal = parseInt(((filterResult.length)*100)/(pokemonsArray.length))
const percentageFilter = document.getElementById("type-percentage")
percentageFilter.textContent = "Os pokémons do tipo " + chosenType + " representam " + percentageCal + "% dos pokémons totais da região de Kanto"

const cardSectionFilter = document.getElementById("container-filter")
cardSectionFilter.innerHTML = cardsInfo(filterResult) 
}

let buttonFilter = document.getElementById("filter-type")
buttonFilter.addEventListener ("click", filterType)


function filterRarity (event) {
  event.preventDefault()
  let chosenRarity = document.getElementById("chosen-rarity").value
  let filterRarityResult = pokemonsArray.filter(pokemon => {
  return pokemon.rarity.includes(chosenRarity)
})
let percentageCalRarity = parseInt(((filterRarityResult.length)*100)/(pokemonsArray.length))
const percentageFilterRarity = document.getElementById("type-percentage")
percentageFilterRarity.textContent = "Os pokémons de raridade " + chosenRarity + " representam " + percentageCalRarity + "% dos pokémons totais da região de Kanto"

const cardSectionRarityFilter = document.getElementById("container-filter")
cardSectionRarityFilter.innerHTML = cardsInfo(filterRarityResult) 
}

let buttonFilterRarity = document.getElementById("filter-rarity")
buttonFilterRarity.addEventListener("click", filterRarity)

function cleanFilter () {
  const cardSectionRarityFilter = document.getElementById("container-filter")
  cardSectionRarityFilter.innerHTML = ""
  const cardSectionRarityCal = document.getElementById("type-percentage")
  cardSectionRarityCal.innerHTML = ""
}

let buttonCleanFilter = document.getElementById("clean-button")
buttonCleanFilter.addEventListener("click", cleanFilter)

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
  const cardOrder = document.getElementById("container-main")
  cardOrder.innerHTML = cards(assortmentAZ)
}
  if (chosenOrder === "ZaA") {
    let assortmentZA = pokemonsArray.sort((a, b) => {
      return order(a,b)
    })
    assortmentZA.reverse()
    const cardOrder = document.getElementById("container-main")
    cardOrder.innerHTML = cards(assortmentZA)
  }
}

let buttonOrder = document.getElementById("pokemon-order")
buttonOrder.addEventListener ("click", sortPokemon)

function cleanAssortment () {
  let initialOrder = (a,b) => (a["num"]).localeCompare(b["num"]);
    let assortmentInitial = pokemonsArray.sort((a,b) => {
      return initialOrder(a,b)
  })
  const cardOrder = document.getElementById("container-main")
  cardOrder.innerHTML = cards(assortmentInitial)
}

let buttonCleanOrder = document.getElementById("clean-order-filter")
buttonCleanOrder.addEventListener ("click", cleanAssortment)

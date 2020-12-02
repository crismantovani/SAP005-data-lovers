//import { pokemon } from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

const pokemonsArray = data.pokemon
function cards (array) {
    let card = ""
    for (let pokemon of array ) {
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


// Pagination

//const listItems = {
  //function listItems(items, pageActual, limitItems) {
    //let result = [];
    //let totalPage = Math.ceil(items.lenght / limitItems);
    //let count = (pageActual * limitItems) - limitItems;

    //if (pageActual <= totalPage) {
      //for (let i = count; i < delimiter; i++) {
        //result.push(items[i]);
        //count++;
      //}
    //}

    //return result;
  //}
//}

// Card BG Color

// const cardColorType = {
//   Bug: "#1E6DE3",
//   Dragon: "#ff6347",
//   Electric: "#D7DB1E",
//   Fighting: "#FEC807",
//   Fire: "#FF8C00",
//   Flying: "#0E8AA5",
//   Ghost: "#F6D7F6",
//   Grass: "#59B539",
//   Ground: "#976B36",
//   Ice: "#DBDDDD",
//   Normal: "#DE2626",
//   Poison: "#9D9F25",
//   Psychic: "#D91CD1",
//   Rock: "#484848",
//   Steel: "#DAA520",
//   Water: "#87CEEB",
// }
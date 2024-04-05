// grab html elements;
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const pokemonCard = document.getElementById('pokemonCard');
// pokemon info html elements
const pokemonName = document.getElementById('pokemon-name'); 
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight'); 
const height = document.getElementById('height');
const imgArea = document.getElementById('imgArea');
const types = document.getElementById('types');

// get values
let searchValue;

// attach events
searchButton.addEventListener('click', render);

// functions
function render() {

  // get input and process it
  searchValue = (searchInput.value).toLowerCase();
  let pokemonSearch = '';
  if (isNaN(searchValue)) {
    for (let i = 0; i < searchValue.length; i++) {
      if (/([a-z])+/g.test(searchValue[i])) {
        pokemonSearch += searchValue[i];
      }
      else if (/ /g.test(searchValue[i])) {
        pokemonSearch += '-';
      }
      else if (searchValue[i] === '♀') {
        pokemonSearch += '-f'
      }
      else if (searchValue[i] === '♂') {
        pokemonSearch += '-m'
      }
    }
  }
  else {
    pokemonSearch = searchValue;
  }
  console.log(`clicked! Input: ${searchValue}, Processed Search: ${pokemonSearch}`);

  // check validity
  searchValid(pokemonSearch)
}

function searchValid(pokemonSearch) {
  fetch('https://pokeapi-proxy.freecodecamp.rocks/api/pokemon')
    .then((res)=>res.json())
    .then((data)=>{
      const pokemonArr = data.results;
      // console.log(pokemonArr);
      const pokemonIdArr = pokemonArr.map((item)=>{return item.id});
      const pokemonNameArr = pokemonArr.map((item)=>{return item.name});
      let index;
      // console.log(pokemonIdArr, pokemonNameArr);
      if (pokemonIdArr.includes(Number(pokemonSearch))) {
        index = pokemonIdArr.indexOf(Number(pokemonSearch));
        pokemonName.innerText = pokemonNameArr[index].toUpperCase();
        pokemonId.innerText = `#${pokemonIdArr[index]}`;
        return true
      } else if (pokemonNameArr.includes(pokemonSearch)) {
        index = pokemonNameArr.indexOf(pokemonSearch);
        pokemonName.innerText = pokemonNameArr[index].toUpperCase();
        pokemonId.innerText = `#${pokemonIdArr[index]}`;
        return true
      }
      alert("Pokémon not found")
      return false
    })
    .then((data)=>{
      if (data === true) {
        // make card appear
        pokemonCard.style.display = 'block';

        getPokemonUrl(pokemonSearch)
      }
      
    })
    .catch((err)=>console.error(`There was an error in the process: ${err}`));
}

function getPokemonUrl(pokemonSearch) {
  url = (`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonSearch}`);
  fetch(url)
  .then((res)=>res.json())
  .then((data)=>{
    const typeArr = data.types;
    const statsArr = data.stats;
    types.innerHTML = '';
    imgArea.innerHTML = `
    <img src="${data.sprites.front_default}" alt="Pokemone Sprite">
    `
    weight.innerText = `Weight: ${data.weight}`;
    height.innerText = `Height: ${data.height}`;
    for (let i = 0; i < statsArr.length; i++) {
      document.getElementById(statsArr[i].stat.name).innerText = statsArr[i].base_stat
    }
    for (let i = 0; i < typeArr.length; i++) {
      types.innerHTML += `
      <div class="pokeType" id="${typeArr[i].type.name}">${typeArr[i].type.name}</div>`
    }


  })
}
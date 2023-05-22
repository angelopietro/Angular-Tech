const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const detail = document.getElementById('pokemon-detail');
const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}" onClick="showPokemonDetail(${pokemon.number})">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function convertPokemonToDetail(pokemon) {
    return `
    <div class="pokemon ${pokemon.type}">
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
        </div>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    <ul class="info">
        <li><label>Species:</label> <span>${pokemon.species.name}</span></li>
        <li><label>Height:</label> <span>${pokemon.height}" (${convertFtToCm(pokemon.height)}cm)</span></li>
        <li><label>Weight:</label> <span>${pokemon.weight}lbs (${convertLbsToKg(pokemon.weight)}kg)</span></li>
        <li><label>Abilities:</label> <span>${pokemon.abilities.map((ability) => ability).join(', ')}</span></li>        
    </ul>
    `
}

function convertLbsToKg(lbs) {
    const lbsConvereted = lbs * 0.453592
    return Math.round(lbsConvereted * 100) / 100;
}

function convertFtToCm(ft) {
    const m = ft * 0.3048;
    const roundedM = Math.round(m * 100) / 100;  
    return roundedM;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
});

function showPokemonDetail(id) { 
    pokeApi.getPokemonDetail(id).then((pokemon) => {
        console.log(pokemon.name)

        detail.innerHTML = convertPokemonToDetail(pokemon)

    })
    openModal();
}

const modal = document.getElementById("modal-detail");  
const closeButton = modal.querySelector(".modal-detail-close");
 
function openModal() {
  modal.style.display = "block";
}
 
function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
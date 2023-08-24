import { getPokemon } from "./pokemonRepository.js";

function openCaptureWindow() {
  const captureButton = document.getElementById("busca");
  captureButton.addEventListener("click", () => {
    const captureWindow = document.querySelector(".busca-pokemon");
    captureWindow.classList.remove("invisivel");
    captureWindow.classList.add("visivel");
  });
}

function closeCaptureWindow() {
  const closeButton = document.querySelector(".busca-pokemon .botao-fechar");
  closeButton.addEventListener("click", () => {
    const captureWindow = document.querySelector(".busca-pokemon");
    captureWindow.classList.remove("visivel");
    captureWindow.classList.add("invisivel");
  })
}

function clickSearchPokemon() {
  const searchForm = document.querySelector(".busca-pokemon form");
  const searchButton = searchForm.querySelector("button");
  const captureWindow = document.querySelector(".busca-pokemon");
  
  searchButton.addEventListener("click",async (event) => {
    event.preventDefault();

    captureWindow.classList.remove("visivel");
    captureWindow.classList.add("invisivel");

    const pokemon = await getPokemon();

    if(!pokemon) {
      console.error("falha ao obter pokemon");
      return;
    }
    console.log(pokemon)
    const siteContent = document.querySelector(".pokemon-info");
    //para evitar problemas de nova busca após buscar um pokemon, criar uma nova funçao com textContent
    siteContent.innerHTML = `
      <h1>Pokemon:</h1>
      <div class="poke-info">
        <img src="${pokemon.pokedata.sprites.front_default}" alt="${pokemon.pokedata.name}"/>
        <h2>${pokemon.pokedata.name.toUpperCase()}</h2>
      </div>
    `;

    putPokemonData(pokemon);

  })
}

function putPokemonData(pokemon) {
  const newContent = document.querySelector(".poke-info");

  newContent.innerHTML += `
    <h2>Habilidades:</h2>
  `;

  for(let i = 0; i < pokemon.pokedata.abilities.length; i++) {
    newContent.innerHTML += `
      <div>
        <span>${pokemon.pokedata.abilities[i].ability.name}</span>
      </div>
    `;
  }

  newContent.innerHTML += `
    <h2>Items:</h2>
  `;

  for(let i = 0; i < pokemon.pokedata.held_items.length; i++) {
    newContent.innerHTML += `
      <div>
        <span>${pokemon.pokedata.held_items[i].item.name}</span>
      </div>
    `;
  }

  if(pokemon.pokedata.held_items.length < 1) {
    newContent.innerHTML += `
    <div>
      <span>None</span>
    </div>
    `;
  }

  newContent.innerHTML += `
    <h2>Movimentos:</h2>
  `;

    for(let i = 0; i < pokemon.pokedata.moves.length; i++) {
      newContent.innerHTML += `
        <div>
          <span>${pokemon.pokedata.moves[i].move.name}</span>
          <span>Lv. ${pokemon.pokedata.moves[i].version_group_details[0].level_learned_at}</span>
          <span>Method: ${pokemon.pokedata.moves[i].version_group_details[0].move_learn_method.name}</span>
        </div>
      `;
    }
  
  newContent.innerHTML += `
    <h2>Status:</h2>
  `;

    for(let i = 0; i < pokemon.pokedata.stats.length; i++) {
      newContent.innerHTML += `
        <div>
          <span>${pokemon.pokedata.stats[i].stat.name}</span>
          <span> --- ${pokemon.pokedata.stats[i].base_stat}</span>
        </div>
      `;
    }

  newContent.innerHTML += `
    <h2>Peso:</h2>
    <span>${pokemon.pokedata.weight}hg</span>
  `;
}

openCaptureWindow();
closeCaptureWindow();
clickSearchPokemon();
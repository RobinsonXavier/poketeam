import { getPokemon } from "./pokemonApiController.js";

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
  const searchButton = document.querySelector("button");
  searchButton.addEventListener("click",async (event) => {
    event.preventDefault();

    const pokemon = await getPokemon();

    if(!pokemon) {
      console.error("falha ao obter pokemon");
      return;
    }
    console.log(pokemon)
    const siteContent = document.querySelector(".conteudo");
    siteContent.innerHTML = `
      <div class="poke-info">
        <img src="${pokemon.pokedata.sprites.front_default}" alt="${pokemon.pokedata.name}"/>
        <h2>${pokemon.pokedata.name.toUpperCase()}</h2>
      </div>
    `


  })
}

openCaptureWindow();
closeCaptureWindow();
clickSearchPokemon();
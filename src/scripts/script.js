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
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    getPokemon();
  })
}

openCaptureWindow();
closeCaptureWindow();
clickSearchPokemon();
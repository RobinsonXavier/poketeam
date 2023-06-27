export async function getPokemon() {
  const pokemonName = document.getElementById("pokemon-procurado").value;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if(!response.ok) {
      console.log(response);
      return;
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }

}

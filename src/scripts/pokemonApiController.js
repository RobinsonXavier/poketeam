export async function getPokemon() {
  const pokemonName = document.getElementById("pokemon-procurado").value;
  try {
    const response = await fetch(`http://localhost:5000/pokemonData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pokename: pokemonName}),
    });

    if(!response) {
      console.log(response);
      return;
    }

    const pokedata = await response.json();
    return pokedata;
  } catch (error) {
    console.log(error);
  }

}

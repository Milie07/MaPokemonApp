/* 
** Module SearchPokemon.js
[x] Rechercher un Pokémon en tapant son nom
[x] Afficher le nom, l'image, les types et Evolutions du Pokémon recherché
[] Gérer le cas où le Pokémon n'existe pas et afficher le message d'erreur
[x] Réinitialiser le formulaire et supprimer les résultats affichés
[] Sanitizer les entrées utilisateur
[] Afficher les résultats dans une carte stylisée avec du CSS
[]Bonus : Proposer des suggestions de noms de Pokémon au fur et à mesure de la saisie
[]Bonus : enregistrer les recherches précédentes et les afficher sur le coté du formulaire
*/

class SearchPokemon {
  constructor() {
    this.form = document.querySelector("form");
    this.input = document.querySelector("input");
    this.pokemons = [];

    this.errorMessage = document.createElement("p");
    this.form.insertAdjacentElement("afterend", this.errorMessage);

    this.init();
    this.resetDiv();
  }
  // Initialisation du module
  async init() {
    await this.getPokemons();
    this.watchUserInput();
  }
  // Ecoute de la saisie utilisateur
  watchUserInput() {
    this.form.addEventListener("submit", async (e) => {
      e.preventDefault();
      await this.getPokemonsData();
    });
  }
  // Récupération des données JSON
  async getPokemons() {
    const response = await fetch("https://tyradex.vercel.app/api/v1/pokemon")
    this.pokemons = await response.json();
  }
  // Récupération des infos du Pokémon recherché
  getPokemonsData() {
    const pokemonsName = this.input.value;
    const pokemonData = this.getDataToLower(pokemonsName);
    if (pokemonData) {
      this.showErrorMessage();
      const name = pokemonData.name.fr;
      const sprite = pokemonData.sprites.regular;
      const typeName = pokemonData.types.map( type => type.name).join(" / ");
      const evolutions = pokemonData.evolution?.next?.map( evol => evol.name).join(" → ") || "Dernier stade d'évolution";
      const newCard = document.createElement("div");
      newCard.classList = "cardPokemon";
      newCard.innerHTML = ` <img class="cardPokemon_img" src="${sprite}" alt="${name}">
                            <h2 class="cardPokemon_name">${name}</h2>
                            <p class="cardPokemon_type">Type : ${typeName}</p>
                            <p class="cardPokemon_evolution">${evolutions}</p>`;
      document.querySelector(".cards").appendChild(newCard);
    } else {
        this.showErrorMessage("Pokémon non trouvé");
    }
  }
  // Gérer les erreurs de  saisie
  showErrorMessage(message ="") {
    this.errorMessage.textContent = message;
  }
  // Passer la saisie utilisateur en minuscules pour la comparaison
  getDataToLower(inputPokeName) {
    const inputPokeNameLower = inputPokeName.toLowerCase();
    const data = this.pokemons.find( pokeObject => pokeObject.name.fr.toLowerCase() === inputPokeNameLower );
    return data;
  }
  // Réinitialisation du formulaire et suppression des résultats affichés
  resetDiv() {
    this.form.reset();
    this.form.addEventListener("reset", () => {
      const divs = document.querySelectorAll("div");
      divs.forEach( div => div.remove() );
    })
  }
}


export { SearchPokemon };

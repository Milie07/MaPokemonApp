/*
** Module SearchPokemon.js
[x] Rechercher un Pokémon en tapant son nom
[x] Gérer le cas où le Pokémon n'existe pas et afficher le message d'erreur
[x] Réinitialiser le formulaire et supprimer les résultats affichés
[x] Sanitizer les entrées utilisateur -> utilisation de TextContent à la place d'innerHTML
[]Bonus : enregistrer les recherches précédentes et les afficher sur le coté du formulaire
*/

import { PokemonCard } from "./PokemonCard.js";
import { AutoSuggestion } from "./AutoSuggestion.js";

class SearchPokemon {
  constructor() {
    this.form = document.querySelector("form");
    this.input = document.querySelector("input");
    this.pokemons = [];
    this.pokemonCard = null;
    this.autoSuggestion = null;

    this.errorMessage = document.createElement("p");
    this.form.insertAdjacentElement("afterend", this.errorMessage);

    this.init();
    this.resetDiv();
  }

  // Initialisation du module
  async init() {
    await this.getPokemons();
    this.pokemonCard = new PokemonCard(this.pokemons);
    this.autoSuggestion = new AutoSuggestion(this.input, this.pokemons);
    this.watchUserInput();
    this.autoSuggestion.initAutoSuggestion();
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
    const response = await fetch("https://tyradex.app/api/v1/pokemon");
    const data = await response.json();
    // Filtrer MissingNo (pokedexId 0) de la liste
    this.pokemons = data.filter((pokemon) => pokemon.pokedex_id !== 0);
  }

  // Récupération des infos du Pokémon recherché
  getPokemonsData() {
    const pokemonsName = this.input.value.trim();
    const pokemonData = this.getDataToLower(pokemonsName);
    if (pokemonData) {
      this.showErrorMessage();
      this.pokemonCard.createCard(pokemonData);
    } else {
      this.showErrorMessage("Pokémon non trouvé");
    }
  }

  // Gérer les erreurs de saisie
  showErrorMessage(message = "") {
    this.errorMessage.textContent = message;
  }

  // Passer la saisie utilisateur en minuscules pour la comparaison +
  getDataToLower(inputPokeName) {
    const removeAccents = (str) =>
      str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const inputClean = removeAccents(inputPokeName.toLowerCase());
    const data = this.pokemons.find(
      (pokeObject) =>
        removeAccents(pokeObject.name.fr.toLowerCase()) === inputClean
    );
    return data;
  }

  // Réinitialisation du formulaire et suppression des résultats affichés
  resetDiv() {
    this.form.reset();
    this.form.addEventListener("reset", () => {
      const pokemonCards = document.querySelectorAll(".cardPokemon");
      pokemonCards.forEach((card) => card.remove());
    });
  }
}

export { SearchPokemon };

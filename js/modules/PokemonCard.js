/*
** Module PokemonCard.js
** Gestion de la création et de l'affichage de la carte Pokémon
[x] Afficher le nom, l'image, les types et Evolutions du Pokémon recherché
[x] Afficher les résultats dans une carte stylisée avec du CSS
*/

import { TypeColors } from "./TypeColors.js";

class PokemonCard {
  constructor(pokemons) {
    this.pokemons = pokemons;
  }

  // Récupération des infos du Pokémon recherché et création de la carte
  createCard(pokemonData) {
    const name = pokemonData.name.fr;
    const spriteShiny = pokemonData.sprites.shiny;
    const spriteRegular = pokemonData.sprites.regular;
    const primaryType = pokemonData.types[0].name; // Premier type du Pokémon
    const evolutions = pokemonData.evolution?.next?.map((evol) => evol.name).join(" → ") || "Dernier stade d'évolution";

    // Création de la carte Pokémon
    const newCard = document.createElement("div");
    newCard.classList = "cardPokemon";
    newCard.style.backgroundColor = TypeColors.getGoodColorType(primaryType);

    // Ajout des Stats PV et 

    // Ajout de l'image du Pokémon
    const imgPokemon = document.createElement("img");
    imgPokemon.className = "cardPokemon_img";
    imgPokemon.src = spriteShiny;
    imgPokemon.alt = name;

    // Ajout du titre/nom du Pokémon
    const namePokemon = document.createElement("h2");
    namePokemon.className = "cardPokemon_name";
    namePokemon.textContent = name;

    // Ajout du Type du Pokémon
    const typeContainer = document.createElement("div");
    typeContainer.className = "cardPokemon_types";
    pokemonData.types.forEach((type) => {
      const typeWrap = document.createElement("span");
      typeWrap.className = "cardPokemon_typeWrap";
      typeWrap.dataset.tooltip = type.name;
      const typeImg = document.createElement("img");
      typeImg.src = type.image;
      typeImg.alt = `pokemon de type: ${type.name}`;
      typeImg.className = "cardPokemon_typeImg";

      typeWrap.appendChild(typeImg);
      typeContainer.appendChild(typeWrap);
    });

    // Ajout des évolutions
    const evolContainer = document.createElement("div");
    evolContainer.className = "cardPokemon_evolutions";

    const evolTitle = document.createElement("h3");
    evolTitle.textContent = "Évolutions";
    evolTitle.className = "cardPokemon_evolTitle";
    evolContainer.appendChild(evolTitle);

    if (pokemonData.evolution?.next) {
      if (pokemonData.evolution?.next.length <= 2){
        evolContainer.style.overflowY = "hidden";
      }
      pokemonData.evolution.next.forEach((evol, index) => {
        // Ajouter une flèche avant chaque évolution (sauf la première)
        if (index > 0) {
          const arrow = document.createElement("span");
          arrow.textContent = "→";
          arrow.className = "cardPokemon_evolArrow";
          evolContainer.appendChild(arrow);
        }

        // Chercher le Pokémon évolution dans la liste pour avoir son sprite
        const evolPokemon = this.pokemons.find(
          (p) => p.name.fr === evol.name
        );

        const evolItem = document.createElement("div");
        evolItem.className = "cardPokemon_evolItem";

        const evolSprite = document.createElement("img");
        evolSprite.src = evolPokemon?.sprites?.regular || "";
        evolSprite.alt = evol.name;
        evolSprite.className = "cardPokemon_evolSprite";

        const evolName = document.createElement("span");
        evolName.textContent = evol.name;
        evolName.className = "cardPokemon_evolName";

        evolItem.append(evolSprite, evolName);
        evolContainer.appendChild(evolItem);
      });
    } else {
      const noEvol = document.createElement("span");
      noEvol.textContent = "Dernier stade d'évolution";
      evolContainer.appendChild(noEvol);
      evolContainer.style.overflowY = "hidden";
    }

    newCard.append(imgPokemon, namePokemon, typeContainer, evolContainer);
    document.querySelector(".cards").appendChild(newCard);
    newCard.setAttribute("tabindex", "-1");
    document.querySelector(".cards").appendChild(newCard);
    newCard.focus({ preventScroll: false });
  }
}

export { PokemonCard };

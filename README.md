# MA POKEMON APP

Petit Projet d'étude pour l'appel et l'utilisation d'une API. Recherche de Pokemon et affichage de ses caractéristiques.

---

## Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6+ (modules, classes, async/await)

## Fonctionnalités

- Recherche de Pokémon par nom (insensible à la casse)
- Autosuggestion de nom dans la barre de recherche
- Appel à l'api [Tyradex](https://tyradex.vercel.app/) (données Pokémon en français)
- Affichage du Pokémon sous forme de carte avec :
  - Image du Pokémon
  - Nom
  - Type(s) avec images
  - Evolutions possibles avec sprites
- Couleur du fond de la carte adapté type principal du Pokémon
- Gestion des erreurs
- Réinitialisation du formulaire et des résultats

## Installation

1. Cloner le dépôt :

```bash
 git clone <url-du-repo>
```

2. Ouvrir `index.html` dans un navigateur ou utiliser un serveur local
   **Note:** Un serveur local est nécessaire car le projet utilise des modules ES6.

## Structure du projet

pokeApp
|—index.html
|—css/
| |_style.css
|–js/
| |_script.js
| |_modules/
|   |_SearchPokemon.js
|–README.md

## Améliorations prévues
. ◻︎ Conteneurisation avec Docker de l'application
. ◻︎ Déploiement de l'application
. ◻︎ Recherche par type
. ◻︎ Gestion d'un historique de recherche
. ◻︎ Ajout des PV (vie, attaque, défense)
. ◻︎ Si Évolution il y a alors proposition des cartes correspondantes
. ◻︎ Possibilités de création de decks personnalisés.

# MA POKEMON APP

Petit Projet d'étude pour l'appel et l'utilisation d'une API. Recherche de Pokemon et affichage de ses caractéristiques.

---
## Versions 
**V1.0.1** - Correction de l'URL de l'API Tyradex
**V1.0.0** - Version initiale

## Technologies utilisées

- HTML5
- CSS3
- JavaScript ES6+ (modules, classes, async/await)

## Fonctionnalités

- Recherche de Pokémon par nom (insensible à la casse)
- Autosuggestion de nom dans la barre de recherche
- Appel à l'api [Tyradex](https://tyradex.app/) (données Pokémon en français)
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
|   |_AutoSuggestion.js
|   |_PokemonCards.js
|   |_TypeColors.js
|–README.md

## Déploiement

### Environnement de production
L'application est hébergée sur **GitHub Pages**, une plateforme d'hébergement statique gratuite intégrée à GitHub, adaptée aux applications front-end sans serveur back-end.

**URL de production :** [https://milie07.github.io/maPokemonApp/](https://milie07.github.io/maPokemonApp/)

### Procédure de déploiement

Le déploiement est automatisé via GitHub Pages à partir de la branche `main` :

1. **Configuration initiale** :
   - Accéder aux paramètres du dépôt GitHub (Settings → Pages)
   - Sélectionner la branche `main` comme source

2. **Mise à jour** :
   ```bash
   git add .
   git commit -m "Description des modifications"
   git push origin main
   ```
   Le déploiement se déclenche automatiquement après chaque push. Délai de mise en ligne : 1 à 2 minutes.

### Prérequis techniques

- **Navigateur moderne** supportant JavaScript ES6+ (modules, async/await, fetch API)
- **Connexion internet** pour les appels à l'API Tyradex et le chargement des ressources

### Sécurité

**Mesures en place :**
- **HTTPS** : Certificat SSL/TLS fourni automatiquement par GitHub Pages pour sécuriser les connexions
- **API externe** : Consommation de l'API Tyradex en lecture seule, sans authentification ni clé API
- **Validation des entrées** : Normalisation et nettoyage des entrées utilisateur via `normalize()` et `trim()` pour éviter les caractères spéciaux problématiques

**Justification des choix de sécurité :**
- **Pas de cookies** : L'application ne nécessite ni authentification, ni stockage de session, ni tracking utilisateur
- **Pas de gestion de sessions** : Application purement front-end sans backend ni base de données
- **Aucune donnée sensible** : Pas de collecte, stockage ou traitement de données personnelles (conformité RGPD native)
- **Pas de formulaires sensibles** : Les données saisies (noms de Pokémon) ne sont pas envoyées à un serveur mais uniquement utilisées pour filtrer des données publiques côté client
- **Architecture statique** : L'absence de backend élimine les risques liés aux injections SQL, aux failles serveur et aux attaques CSRF

## Améliorations prévues
. ◻︎ Recherche par type
. ◻︎ Gestion d'un historique de recherche
. ◻︎ Ajout des PV (vie, attaque, défense)
. ◻︎ Si Évolution il y a alors proposition des cartes correspondantes
. ◻︎ Possibilités de création de decks personnalisés.

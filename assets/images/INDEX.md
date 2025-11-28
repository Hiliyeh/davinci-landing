# Index des Assets - Davinci Fighting

## Convention de nommage

```
[scope]-[page]-[usage].[ext]

- scope: global | page
- page: nom de la page (mma-adulte, bjj-junior, etc.)
- usage: hero | action | card
```

---

## Structure des dossiers

```
assets/images/
├── logo/
│   └── logo-davinci-fighting.jpg
├── photos/
│   ├── global-hero.jpg
│   └── page-[...].jpg
└── icons/
    └── [équipement].svg
```

---

## LOGO

| Fichier | Usage |
|---------|-------|
| `logo/logo-davinci-fighting.jpg` | Logo principal (header, footer, favicon) |

---

## PHOTOS - Guide d'utilisation

### Global
| Fichier | Utiliser sur | Position |
|---------|--------------|----------|
| `global-hero.jpg` | Page accueil | Hero section |

### Pages ADULTE

| Fichier | Page | Position |
|---------|------|----------|
| `page-mma-adulte-hero.jpg` | /mma-adulte | Hero principal |
| `page-mma-adulte-action.jpeg` | /mma-adulte | Section action/galerie |
| `page-mma-pro-hero.jpg` | /mma-adulte-pro | Hero principal |
| `page-mma-pro-card.jpg` | Accueil | Card discipline |
| `page-bjj-adulte-hero.jpg` | /bjj-adulte | Hero principal |
| `page-bjj-adulte-action.jpeg` | /bjj-adulte | Section action/galerie |
| `page-boxe-adulte-hero.jpg` | /boxe-anglaise-adulte | Hero principal |
| `page-boxe-adulte-action.jpg` | /boxe-anglaise-adulte | Section action/galerie |
| `page-kick-adulte-hero.jpg` | /kick-boxing-adulte | Hero principal |
| `page-kick-adulte-action.jpeg` | /kick-boxing-adulte | Section action/galerie |
| `page-kick-pro-hero.jpg` | /kick-boxing-pro | Hero principal |
| `page-open-mat-hero.jpg` | /open-mat-grappling-adulte | Hero principal |
| `page-fitness-hero.png` | /fitness | Hero principal |

### Pages JUNIOR

| Fichier | Page | Position |
|---------|------|----------|
| `page-mma-junior-hero.jpg` | /mma-junior | Hero principal |
| `page-mma-junior-card.jpg` | Accueil | Card discipline |
| `page-bjj-junior-hero.jpg` | /bjj-junior | Hero principal |
| `page-bjj-junior-card.jpg` | Accueil | Card discipline |
| `page-kick-junior-hero.jpg` | /kick-boxing-junior | Hero principal |
| `page-kick-junior-card.jpg` | Accueil | Card discipline |
| `page-boxe-junior-hero.jpeg` | /boxe-anglais-junior | Hero principal |

### Pages BABY

| Fichier | Page | Position |
|---------|------|----------|
| `page-baby-boxe-hero.jpg` | /boxe-anglaise-baby | Hero principal |
| `page-kick-baby-hero.jpg` | /kick-boxing-baby | Hero principal |
| `page-kick-baby-card.jpg` | Accueil | Card discipline |

### Pages AUTRES

| Fichier | Page | Position |
|---------|------|----------|
| `page-horaire-hero.png` | /horaire | Hero/illustration |

---

## ICÔNES SVG - Guide d'utilisation

### Par discipline

| Discipline | Icônes à utiliser |
|------------|-------------------|
| **MMA** | mma.svg, protege-dents.svg, gants-boxe.svg, protege-tibias.svg, tenue-sport.svg, bandes-boxe.svg |
| **BJJ** | kimono-bjj.svg, protege-dents.svg |
| **Boxe Anglaise** | gants-boxe.svg, protege-dents.svg, bandes-boxe.svg, tenue-sport.svg, chaussures-boxe.svg, corde-sauter.svg |
| **Kick Boxing** | gants-boxe.svg, protege-dents.svg, bandes-boxe.svg, tenue-sport.svg, protege-tibias.svg |
| **Fitness** | serviette.svg, bouteille-eau.svg, tenue-sport.svg |
| **Open Mat** | tenue-sport.svg, protege-dents.svg |

### Liste complète

| Fichier | Représente |
|---------|------------|
| `icons/mma.svg` | Gants MMA |
| `icons/gants-boxe.svg` | Gants de boxe |
| `icons/protege-dents.svg` | Protège-dents |
| `icons/protege-tibias.svg` | Protège-tibias |
| `icons/bandes-boxe.svg` | Bandes de boxe |
| `icons/kimono-bjj.svg` | Kimono BJJ |
| `icons/tenue-sport.svg` | Tenue sportive |
| `icons/chaussures-boxe.svg` | Chaussures boxe |
| `icons/corde-sauter.svg` | Corde à sauter |
| `icons/serviette.svg` | Serviette |
| `icons/bouteille-eau.svg` | Bouteille d'eau |

---

## Récapitulatif

| Type | Nombre | Taille |
|------|--------|--------|
| Logo | 1 | 97 KB |
| Photos | 25 | ~5.5 MB |
| Icônes SVG | 11 | ~31 KB |
| **TOTAL** | **37 fichiers** | **~5.6 MB** |

---

## Utilisation HTML

```html
<!-- Logo -->
<img src="assets/images/logo/logo-davinci-fighting.jpg" alt="Davinci Fighting">

<!-- Photo hero -->
<img src="assets/images/photos/page-mma-adulte-hero.jpg" alt="MMA Adulte">

<!-- Icône équipement -->
<img src="assets/images/icons/gants-boxe.svg" alt="Gants de boxe">
```

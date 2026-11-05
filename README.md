# Portfolio — Lénaïc Dissaké

Site portfolio statique : HTML + CSS + JS pur, sans framework ni build.
Hébergé sur GitHub Pages à l'adresse **https://narcusensei.github.io**

## Structure

```
portfolio/
├── index.html                    Page d'accueil (hero, projets, à propos, compétences, certifications, contact)
├── projets/
│   ├── vsphere-ad.html           Lab vSphere + Active Directory
│   ├── vps-kazoku-bot.html       VPS Linux durci + KAZOKU-BOT
│   ├── scripts.html              Scripts d'automatisation
│   ├── reseau-packet-tracer.html Maquettes réseau Cisco
│   └── tryhackme.html            TryHackMe + write-ups
├── assets/
│   ├── css/style.css             Tous les styles (couleurs : variables en haut du fichier)
│   ├── js/main.js                Menu mobile + année du footer
│   └── img/                      Photo, favicon, captures d'écran
└── cv/CV-Lenaic-Dissake.pdf      CV téléchargeable
```

## Modifier le contenu

Le site est 100 % statique : **éditer directement les fichiers HTML** avec n'importe quel
éditeur (VS Code, Bloc-notes…) puis redéployer (voir plus bas).

### Changer une information (téléphone, email, liens…)
Les coordonnées apparaissent dans `index.html` (sections `hero`, `contact`, `footer`)
et dans le `footer` de chaque page projet. Rechercher/remplacer `lenaic.dissake69@gmail.com`
ou `+33 7 88 70 28 80` dans tous les fichiers.

### Mettre à jour le CV
Remplacer `cv/CV-Lenaic-Dissake.pdf` par la nouvelle version (garder le même nom de fichier).

### Ajouter une capture d'écran
1. Déposer l'image dans `assets/img/` (ex. `capture-vsphere.png`)
2. Remplacer le bloc `<div class="shot">…</div>` de la page concernée par :
   ```html
   <figure class="figure">
     <img src="../assets/img/capture-vsphere.png" alt="Description de la capture">
     <figcaption>Légende de la capture.</figcaption>
   </figure>
   ```

### Ajouter un write-up TryHackMe
Dans `projets/tryhackme.html`, dupliquer un bloc `<article class="writeup">…</article>`
et suivre la structure : Objectif / Reconnaissance / Exploitation / Résultat / Leçon.

### Changer les couleurs
Tout est dans les variables CSS en tête de `assets/css/style.css` :
`--accent` (bleu principal), `--bg` (fond), `--text` (texte)…

## Prévisualiser en local

```bash
cd portfolio
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Déployer sur GitHub Pages

Le site est déployé depuis la branche `main` du dépôt `narcusensei.github.io`.

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push
```

Le site est en ligne 1 à 2 minutes après le push.
Jamais déployé ? Sur GitHub : dépôt → *Settings* → *Pages* → Source : `main` / root.

## To-do contenu (placeholders restants)

- [ ] Capture du lab vSphere → `assets/img/capture-vsphere.png`
- [x] Capture du VPS (`systemctl status` + `ufw status`) → `assets/img/capture-vps.png` ✓ intégrée
- [ ] Capture topologie Packet Tracer → `assets/img/capture-packet-tracer.png`
- [ ] Capture profil TryHackMe (rang, badges) → `assets/img/capture-tryhackme.png`
- [ ] Créer le dépôt GitHub des scripts et remplacer le bloc `shot` de `scripts.html`
- [ ] Rédiger les write-ups n°1 et n°2 (rooms au choix)
- [ ] Ajouter les liens Credly des certifications si disponibles

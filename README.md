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
│   ├── scripts.html              Scripts d'automatisation (admin-toolkit)
│   ├── reseau-packet-tracer.html Maquettes réseau Cisco
│   ├── tryhackme.html            TryHackMe : rooms présentées
│   └── ctf-cyberzerk.html        CyberZerk CTF 2026 : résultats, défis résolus, certificat
├── assets/
│   ├── css/style.css             Tous les styles (couleurs : variables en haut du fichier)
│   ├── js/main.js                Menu mobile, année du footer, visionneuse de certificats, terminal animé
│   └── img/                      Photo, favicon, captures d'écran, certificats (cert-*.png)
└── cv/CV-Lenaic-Dissake.pdf      CV téléchargeable
```

## Modifier le contenu

Le site est 100 % statique : **éditer directement les fichiers HTML** avec n'importe quel
éditeur (VS Code, Bloc-notes…) puis redéployer (voir plus bas).

### Changer une information (email, liens…)
Les coordonnées apparaissent dans `index.html` (sections `hero` et `contact`)
et dans le `footer` de chaque page. Rechercher/remplacer `lenaic.dissake69@gmail.com`
dans tous les fichiers.

### Modifier `style.css` ou `main.js`
Incrémenter le numéro de version dans **toutes les pages** (`style.css?v=4` → `?v=5`,
`main.js?v=4` → `?v=5`). Sans cela, les navigateurs gardent l'ancienne version en cache.

### Mettre à jour le CV
Remplacer `cv/CV-Lenaic-Dissake.pdf` par la nouvelle version (garder le même nom de fichier).

### Ajouter un certificat
1. Exporter le certificat en PNG dans `assets/img/` :
   - une image pleine taille `cert-nom.png` (environ 1870 px de large) ;
   - une vignette `cert-nom-thumb.png` (560 px de large).
2. Dans `index.html`, section `#certifications`, ajouter une ligne sur ce modèle :
   ```html
   <div class="cert-item">
     <div class="cert-icon">…icône SVG…</div>
     <div class="cert-text">
       <h3>Intitulé du certificat</h3>
       <p class="org">Organisme — date</p>
       <button class="cert-view" type="button" data-cert="dlg-nom">Voir le certificat</button>
     </div>
     <button class="cert-thumb" type="button" data-cert="dlg-nom" aria-label="Agrandir le certificat …">
       <img src="assets/img/cert-nom-thumb.png" alt="" loading="lazy" width="560" height="396">
     </button>
     <span class="year">2026</span>
   </div>
   ```
3. Ajouter la visionneuse correspondante juste avant le footer :
   ```html
   <dialog class="cert-dialog" id="dlg-nom" aria-label="Intitulé du certificat">
     <button class="cert-close" type="button" aria-label="Fermer">&times;</button>
     <img src="assets/img/cert-nom.png" alt="Description du certificat" width="1871" height="1323">
     <div class="dlg-bar">
       <span>Organisme</span>
       <span class="dlg-links">
         <a href="assets/img/cert-nom.png" target="_blank" rel="noopener">Ouvrir en pleine taille</a>
       </span>
     </div>
   </dialog>
   ```
   L'ouverture et la fermeture sont gérées automatiquement par `main.js`.

### Ajouter une capture d'écran
1. Déposer l'image dans `assets/img/`.
2. Insérer dans la page concernée :
   ```html
   <figure class="figure">
     <img src="../assets/img/capture.png" alt="Description de la capture">
     <figcaption>Légende de la capture.</figcaption>
   </figure>
   ```
   Côté accueil, le chemin s'écrit `assets/img/capture.png` (sans `../`).

### Ajouter une room TryHackMe
Dans `projets/tryhackme.html`, dupliquer un bloc `<article class="writeup">…</article>`
et suivre la structure : La room / Ce que j'y ai travaillé / Leçon défensive.

### Changer les couleurs
Tout est dans les variables CSS en tête de `assets/css/style.css` :
`--accent` (cyan principal), `--bg` (fond), `--text` (texte)…

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

**Le dépôt doit rester public.** Sur un compte GitHub gratuit, passer le dépôt en privé
désactive GitHub Pages et rend le site inaccessible (erreur 404).

## Reste à faire

- [ ] Google Cybersecurity Certificate : justificatif à ajouter (PDF Credly ou Coursera)
- [ ] NDG Linux Essentials : fournir le justificatif, ou retirer la ligne si seul
      *Linux Unhatched* a été suivi
- [ ] Facultatif : notes techniques sur deux ou trois défis du CTF

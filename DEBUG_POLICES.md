# Debug - Problème de taille de police

## 🔍 Problème identifié

Les changements de taille de police ne semblent pas s'appliquer visuellement malgré les modifications du code.

## ✅ Modifications effectuées

### 1. Configuration CSS (src/index.css)

```css
html {
  font-size: 20px !important;  /* Base pour tous les rem de Tailwind */
}

body {
  font-family: 'Barlow Semi Condensed';
  line-height: 1.6;
}

h1 {
  font-size: 1.35em;  /* +35% par rapport à la base */
}

h2 {
  font-size: 1.25em;  /* +25% */
}

h3 {
  font-size: 1.18em;  /* +18% */
}
```

### 2. Hero.tsx

```tsx
<h1 className="text-7xl sm:text-8xl lg:text-9xl font-display font-bold text-gray-900 mb-6 leading-tight">
  Des techniciens de confiance, simplement!
</h1>
```

**Calcul des tailles réelles :**
- Mobile (text-7xl) : 4.5rem × 20px = **90px** × 1.35em = **~121px**
- Tablette (text-8xl) : 6rem × 20px = **120px** × 1.35em = **~162px**
- Desktop (text-9xl) : 8rem × 20px = **160px** × 1.35em = **~216px** 🔥

## 🐛 Causes possibles du problème

### 1. Cache du navigateur
**Solution** : Faire un hard refresh
- **Chrome/Edge** : `Cmd + Shift + R` (Mac) ou `Ctrl + Shift + R` (Windows)
- **Firefox** : `Cmd + Shift + R` (Mac) ou `Ctrl + F5` (Windows)
- **Safari** : `Cmd + Option + R`

### 2. Serveur de développement arrêté
**Solution** : Relancer le serveur
```bash
npm run dev
```

### 3. Tailwind v4 avec @theme
Le warning `Unknown at rule @theme` est normal avec certains linters mais ne devrait pas empêcher le fonctionnement.

### 4. CSS non chargé
Vérifier dans les DevTools du navigateur :
1. Ouvrir l'inspecteur (F12)
2. Aller dans l'onglet "Elements" / "Inspecteur"
3. Sélectionner le h1
4. Vérifier dans "Computed" si `font-size` est bien appliqué

### 5. Spécificité CSS
J'ai ajouté `!important` sur `html { font-size: 20px !important; }` pour forcer l'application.

## 📋 Checklist de vérification

- [ ] Le serveur de développement tourne (`npm run dev`)
- [ ] Hard refresh du navigateur effectué
- [ ] DevTools ouvert pour vérifier les styles appliqués
- [ ] Console du navigateur vérifiée (pas d'erreurs JS/CSS)
- [ ] Vérifier que le fichier `src/index.css` est bien importé dans `src/main.tsx`

## 🔧 Actions de debug

### Vérifier l'import du CSS
```bash
# Vérifier que index.css est importé
grep -r "index.css" src/main.tsx
```

### Inspecter le h1 dans le navigateur
1. Clic droit sur le titre "Des techniciens de confiance, simplement!"
2. "Inspecter l'élément"
3. Regarder dans l'onglet "Computed" la valeur de `font-size`
4. Regarder dans l'onglet "Styles" si les classes Tailwind sont appliquées

### Tester avec une taille fixe
Si rien ne fonctionne, tester avec une classe inline :
```tsx
<h1 style={{ fontSize: '120px' }}>
  Des techniciens de confiance, simplement!
</h1>
```

## 📊 Comparaison attendue

### Image 1 (ancienne police - Bricolage Grotesque)
- Titre très imposant, gras, prend beaucoup d'espace

### Image 2 (nouvelle police - Barlow Semi Condensed AVANT ajustements)
- Titre plus petit, moins imposant

### Résultat attendu APRÈS ajustements
- Titre aussi imposant que l'image 1
- Police Barlow Semi Condensed
- Taille : ~120-220px selon l'écran

## 🚀 Solution rapide

Si le problème persiste, essayer cette approche directe dans Hero.tsx :

```tsx
<h1 
  className="font-display font-bold text-gray-900 mb-6 leading-tight"
  style={{ 
    fontSize: 'clamp(4rem, 10vw, 10rem)',
    fontFamily: 'Barlow Semi Condensed'
  }}
>
  Des techniciens de confiance, simplement!
</h1>
```

Cette approche utilise `clamp()` pour une taille responsive sans dépendre de Tailwind.

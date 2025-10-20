# Analyse Design - Polices et Couleurs

## 📝 État actuel vs. Spécifications demandées

---

## 🔤 POLICES

### Actuellement utilisé
- **Titres (h1-h6)** : `Bricolage Grotesque` (poids: 400, 500, 600, 700, 800)
- **Corps de texte** : `Figtree` (poids: 300, 400, 500, 600, 700, 800)
- **Import** : Google Fonts

### Spécifications demandées
- **Titres** : `Barlow Semi Condensed` - **Gras** (700)
- **Sous-titres** : `Barlow Semi Condensed` - **Semi Gras** (600)
- **Corps** : `Barlow Semi Condensed` - **Normal** (400)

### ✅ Actions requises
1. Remplacer l'import Google Fonts dans `src/index.css`
2. Changer les variables CSS :
   - `--font-sans` → Barlow Semi Condensed
   - `--font-display` → Barlow Semi Condensed
3. Ajuster les poids de police dans les composants

---

## 🎨 COULEURS

### Palette actuelle (dans `src/index.css`)
```css
--color-primary: #FF6B35        /* Orange rougeâtre */
--color-primary-dark: #E55A2B   /* Orange foncé */
--color-secondary: #57E2E5      /* Cyan clair */
--color-accent: #FFB627         /* Jaune/orange */
--color-blue: #1A5F7A           /* Bleu moyen */
--color-blue-dark: #134A5F      /* Bleu foncé */
--color-cream: #FFF8F0          /* Crème */
```

### Palette demandée - Couleurs principales
```css
Bleu foncé    : #03507c
Orange        : #ff8200
Jaune         : #fad02c
Bleu turquoise: #00cbbe
Blanc         : #ffffff
```

### Palette demandée - Variantes pastel
```css
Jaune pastel      : #ffeaa8 / #F4F0A4
Bleu gris         : #98BED8
Turquoise pastel  : #aef0ea
Orange pâle       : #ffd1a6
Kaki pastel       : #93ad97
```

### 🔄 Mapping des couleurs (ancien → nouveau)
| Ancien | Nouveau suggéré | Usage |
|--------|-----------------|-------|
| `#FF6B35` (primary) | `#ff8200` (Orange) | Boutons primaires, accents |
| `#E55A2B` (primary-dark) | `#ffd1a6` (Orange pâle - hover) | Hover des boutons |
| `#57E2E5` (secondary) | `#00cbbe` (Bleu turquoise) | Éléments secondaires |
| `#FFB627` (accent) | `#fad02c` (Jaune) | Accents |
| `#1A5F7A` (blue) | `#03507c` (Bleu foncé) | Header, sections |
| `#134A5F` (blue-dark) | `#03507c` (même bleu) | Sections sombres |
| `#FFF8F0` (cream) | `#ffeaa8` ou `#F4F0A4` (Jaune pastel) | Fonds de section |

### ✅ Actions requises
1. Mettre à jour les variables CSS dans `src/index.css`
2. Ajouter les nouvelles variantes pastel pour les hovers
3. Vérifier l'utilisation des couleurs dans tous les composants :
   - Hero, Header, Footer
   - Toutes les pages (Entreprise, OffreEntreprises, DevenirPro, etc.)
   - Tous les composants (Features, Testimonials, FAQ, etc.)

---

## 📦 Fichiers à modifier

### Priorité 1 - Configuration globale
- ✅ `src/index.css` - Import polices + variables couleurs

### Priorité 2 - Composants principaux
- `src/components/Header.tsx` - bg-blue → nouveau bleu foncé
- `src/components/Hero.tsx` - bg-primary → nouvel orange
- `src/components/Footer.tsx` - Couleurs du footer

### Priorité 3 - Pages
- `src/pages/Entreprise.tsx` (74 occurrences de classes couleur)
- `src/pages/OffreEntreprises.tsx` (90 occurrences)
- `src/pages/EnSavoirPlus.tsx` (81 occurrences)
- `src/pages/DevenirPro.tsx` (75 occurrences)
- `src/pages/ClubKaza.tsx` (57 occurrences)
- Et toutes les autres pages...

### Priorité 4 - Composants secondaires
- Tous les composants dans `src/components/`

---

## 🎯 Nouvelle configuration CSS proposée

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;600;700&display=swap');
@import "tailwindcss";

@theme {
  /* Polices */
  --font-sans: 'Barlow Semi Condensed', system-ui, sans-serif;
  --font-display: 'Barlow Semi Condensed', system-ui, sans-serif;
  
  /* Couleurs principales */
  --color-primary: #ff8200;           /* Orange */
  --color-primary-dark: #e67400;      /* Orange foncé */
  --color-secondary: #00cbbe;         /* Bleu turquoise */
  --color-accent: #fad02c;            /* Jaune */
  --color-blue: #03507c;              /* Bleu foncé */
  --color-blue-dark: #024060;         /* Bleu très foncé */
  
  /* Variantes pastel (fonds / hover) */
  --color-yellow-pastel: #ffeaa8;     /* Jaune pastel */
  --color-yellow-pastel-alt: #F4F0A4; /* Jaune pastel alternatif */
  --color-blue-gray: #98BED8;         /* Bleu gris */
  --color-turquoise-pastel: #aef0ea;  /* Turquoise pastel */
  --color-orange-pale: #ffd1a6;       /* Orange pâle */
  --color-khaki-pastel: #93ad97;      /* Kaki pastel */
  
  /* Blanc */
  --color-white: #ffffff;
}
```

---

## 📊 Résumé des modifications

### Polices
- ❌ À remplacer : Bricolage Grotesque + Figtree
- ✅ À implémenter : Barlow Semi Condensed (400, 600, 700)

### Couleurs
- ❌ À remplacer : 7 variables existantes
- ✅ À implémenter : 5 couleurs principales + 6 variantes pastel
- 🔢 **Nombre de fichiers à vérifier** : ~24 fichiers TSX avec classes de couleurs

### Effort estimé
- **Import polices + variables CSS** : 5 minutes
- **Vérification et ajustement composants** : 2-3 heures
- **Tests visuels** : 1 heure

---

## 🚀 Prochaines étapes recommandées

1. **Créer une branche** pour ces modifications
2. **Modifier** `src/index.css` avec les nouvelles polices et couleurs
3. **Tester** sur quelques pages clés
4. **Itérer** sur tous les composants et pages
5. **Vérifier** la cohérence visuelle globale
6. **Valider** avec le client

---

*Document généré le : {{date}}*
*Projet : Kaza Sénégal (aveckaza.com)*

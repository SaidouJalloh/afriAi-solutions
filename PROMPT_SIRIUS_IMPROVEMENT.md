# 🚀 Prompt Complet pour Amélioration du Site Sirius

**À utiliser avec Claude Code pour analyser et améliorer le site Sirius**

---

## 📝 CONTEXTE

Tu dois analyser et améliorer le projet Sirius en utilisant le **même stack et patterns** que le projet AfriAI Solutions (référence: `e:\afriAi-solutions\GUIDE_OPTIMISATION_RESPONSIVITE.md`).

**Objectif:** Transformer Sirius en utilisant les best practices d'optimisation, responsivité et performance du projet AfriAI.

---

## 🔍 PHASE 1: AUDIT COMPLET

### Analyse de la structure actuelle

D'abord, **explore complètement le projet Sirius**:

```
1. Structure générale:
   - Arborescence src/ et components/
   - Organisation des pages/routes
   - Configuration (package.json, tailwind.config, tsconfig, etc.)

2. Stack technologique:
   - Framework: React? Next.js? Version?
   - CSS: Tailwind? SCSS? CSS-in-JS? Pur CSS?
   - Build tool: Webpack? Vite? Next.js default?
   - Autres dépendances importantes

3. État actuel de la responsivité:
   - Breakpoints utilisés (compare avec lg: 1025px, xl: 1280px)
   - Patterns de mobile-first?
   - Media queries avec @media ou Tailwind?

4. Performance:
   - Images: next/image ou <img>?
   - Lazy loading implémenté?
   - CSS: minifié et bien organisé?
   - Animations: GPU-accelerated ou CPU?

5. SEO & Métadonnées:
   - robots.txt existe?
   - sitemap.xml?
   - Open Graph tags?
   - JSON-LD structured data?
   - Canonical URLs?

6. Accessibilité:
   - Sémantique HTML (proper <header>, <nav>, <main>, <footer>)?
   - Aria labels?
   - Contrast ratio correct?
   - Tests WCAG 2.1?

7. Code Quality:
   - TypeScript utilisé? Strict mode?
   - ESLint config?
   - Formatage (Prettier)?
   - Pas de `any` types?

8. CSS Organization:
   - SCSS Modules ou CSS global?
   - Conflits de classes possibles?
   - Réutilisabilité des styles?
   - Variables CSS?
```

---

## 📋 PHASE 2: RAPPORT D'ANALYSE

**Génère un rapport structuré incluant:**

### Section 1: État Actuel
- ✅ Ce qui fonctionne bien
- ⚠️ Points problématiques
- ❌ Ce qui manque

### Section 2: Comparaison avec AfriAI
Pour chaque domaine, compare:
```
Domaine: Responsive Design
AfriAI:  lg: 1025px, @apply + media queries, mobile-first
Sirius:  [Décris ce qu'il y a]
Gap:     [Qu'est-ce qui diffère?]
Impact:  [Pourquoi c'est important?]
```

Domaines à comparer:
1. Responsive Design
2. Image Optimization
3. CSS Architecture
4. Performance
5. SEO
6. Accessibility
7. Code Organization
8. TypeScript Usage

### Section 3: Priorisation des Améliorations

Classe les améliations en 3 niveaux:

**🔴 CRITIQUE** (Fait les premiers):
- Responsivité cassée sur mobile
- Performance très mauvaise (Lighthouse < 60)
- Sécurité/bugs bloquants
- SEO absent

**🟡 IMPORTANT** (À faire ensuite):
- Réorganisation des composants
- Migration vers SCSS Modules
- Lazy loading images
- Animations GPU
- TypeScript strict mode

**🟢 NICE-TO-HAVE** (Peut attendre):
- Dark mode
- Animations avancées
- A/B testing setup
- Analytics enrichis

---

## 🛠️ PHASE 3: PLAN D'IMPLÉMENTATION

Pour chaque amélioration prioritaire, crée un plan détaillé:

```markdown
### Amélioration: [Nom]

**Situation actuelle:**
- Exemple de code actuel

**Situation désirée:**
- Exemple de code désiré (inspiré d'AfriAI)

**Étapes:**
1. [Étape 1]
2. [Étape 2]
3. [Étape 3 - Test]

**Fichiers à modifier:**
- src/components/xxx.tsx
- src/styles/xxx.module.scss
- etc.

**Effort estimé:** X heures
**Risque:** Faible/Moyen/Élevé
**Dépendances:** [Autres améliorations requises avant]
```

---

## 🎯 PATTERNS À APPLIQUER (Du projet AfriAI)

Applique ces patterns au projet Sirius:

### Pattern 1: SCSS Modules + @apply
```scss
// ✅ À faire (comme AfriAI)
.header {
    @apply bg-background shadow-sm absolute lg:flex hidden;
}

// ❌ À éviter
.header {
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: none;
}
@media (min-width: 1025px) {
    .header { display: flex; }
}
```

### Pattern 2: Mobile-First Breakpoints
```javascript
// ✅ tailwind.config.js (Sirius doit utiliser)
screens: {
    sm: "640px",
    md: "768px",
    lg: "1025px",    // ← Custom (AfriAI)
    xl: "1280px",
    "mid-xl": "1380px",
    "2xl": "1536px"
}
```

### Pattern 3: Next/Image partout
```tsx
// ✅ Remplace tous les <img> par:
import Image from "next/image";
<Image 
    src="/photo.jpg"
    alt="Description"
    width={300}
    height={200}
    quality={75}
    priority={false}
    sizes="(max-width: 640px) 100vw, 50vw"
/>
```

### Pattern 4: Skeleton Loaders
```tsx
// ✅ Ajoute pour tous les contenus à chargement asynchrone
function SkeletonCard() {
    return <div className="animate-pulse h-32 bg-gray-200 rounded" />;
}
```

### Pattern 5: GPU Animations
```scss
// ✅ Utilise transform, opacity, scale
.card {
    transition: transform 0.3s ease, opacity 0.3s ease;
    &:hover {
        transform: scale(1.05);  // GPU
    }
}

// ❌ Pas comme ça:
.card {
    transition: left 0.3s ease;  // CPU - laggy
    &:hover { left: 10px; }
}
```

### Pattern 6: CSS Variables + OKLCH
```css
/* ✅ Comme AfriAI */
:root {
    --primary: 0.351 0.165 276.598;
    --background: 1 0 180;
}

.button {
    background: oklch(var(--primary));
}

/* ❌ Pas comme ça */
.button {
    background: #7c3aed;
}
```

### Pattern 7: SEO Complet
```tsx
// ✅ Chaque page doit avoir:
export const metadata: Metadata = {
    title: "Page Title | Sirius",
    description: "Meta description...",
    openGraph: {
        title: "...",
        description: "...",
        images: [{ url: "og-image.png", width: 1200, height: 630 }]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    }
};

// ✅ robots.txt + sitemap.xml
// ✅ JSON-LD structured data
// ✅ Canonical URLs
```

---

## 📊 RÉSULTATS ATTENDUS

Après les améliorations:

### Performance (Lighthouse)
| Aspect | Avant | Après Target |
|--------|-------|--------------|
| Performance | ? | 90+ |
| Accessibility | ? | 95+ |
| Best Practices | ? | 95+ |
| SEO | ? | 100 |

### Responsivité
- ✅ Parfait sur 320px (mobile)
- ✅ Parfait sur 640px (tablet)
- ✅ Parfait sur 1025px (laptop)
- ✅ Parfait sur 1280px+ (desktop)
- ✅ Pas de layout shifts (CLS < 0.1)

### Code Quality
- ✅ TypeScript strict mode
- ✅ Pas de `any` types
- ✅ ESLint 0 warnings
- ✅ Prettier formatting appliqué
- ✅ SCSS Modules pour tous les composants

### SEO
- ✅ robots.txt
- ✅ sitemap.xml (auto-généré)
- ✅ Open Graph tags sur toutes les pages
- ✅ JSON-LD structured data (Event, Article, etc.)
- ✅ Canonical URLs
- ✅ Meta descriptions

---

## 🚀 PROCÉDURE D'IMPLÉMENTATION

**Important:** Fais ça par ordre:

1. **Setup Foundation** (Si nécessaire)
   - Upgrade Next.js si vieux
   - Setup Tailwind (si pas fait)
   - Setup SCSS (si pas fait)
   - TypeScript strict mode

2. **Quick Wins** (Facile + gros impact)
   - Remplacer <img> par Next/Image
   - Ajouter SEO basique (metadata, robots.txt)
   - Fix breakpoints Tailwind
   - Ajouter @apply aux SCSS

3. **Architecture** (Plus long)
   - Convertir CSS global en SCSS Modules
   - Réorganiser les composants
   - Mettre à jour tous les styles avec @apply
   - Ajouter skeleton loaders

4. **Polish** (Final touches)
   - Animations GPU
   - Dark mode (optionnel)
   - Accessibility audit
   - Performance tweaks

5. **Testing & Validation**
   - Lighthouse audit
   - Mobile device testing
   - SEO check (Google Search Console)
   - Cross-browser testing

---

## 📌 COMMIT STRATEGY

Fais des commits petits et nombreux:

```
✅ commit 1: setup(tailwind): update config with custom breakpoints
✅ commit 2: perf(images): replace img tags with Next/Image
✅ commit 3: seo(metadata): add robots.txt and sitemap.xml
✅ commit 4: feat(styles): migrate header to SCSS modules + @apply
✅ commit 5: feat(styles): migrate footer to SCSS modules + @apply
✅ commit 6: a11y(accessibility): improve semantic HTML
✅ commit 7: perf(animations): convert to GPU-accelerated transforms
```

---

## 🔗 RÉFÉRENCE

Consulte le guide d'optimisation du projet AfriAI:
- Fichier: `GUIDE_OPTIMISATION_RESPONSIVITE.md`
- Patterns détaillés avec exemples
- Best practices éprouvées
- Checklist pre-launch

---

## ✅ CHECKLIST FINALE

Avant de considérer Sirius "amélioré":

- [ ] Lighthouse score 85+ (tous les aspects)
- [ ] Mobile responsive testé sur 3+ devices réels
- [ ] Toutes les images optimisées (Next/Image)
- [ ] Core Web Vitals: vert ✅
- [ ] SEO complet: robots.txt, sitemap, OG, JSON-LD
- [ ] Accessibility: WCAG 2.1 AA minimum
- [ ] TypeScript strict mode activé
- [ ] Tous les composants avec SCSS Modules
- [ ] @apply utilisé partout (pas de CSS brut)
- [ ] Zéro `any` en TypeScript
- [ ] Animations GPU-accelerated
- [ ] Pas de layout shifts (CLS < 0.1)
- [ ] Performance: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 📞 QUESTIONS CLÉS À SE POSER

Pendant l'implémentation:

1. **Responsivité:** Ça s'affiche correctement sur un iPhone SE (320px)?
2. **Performance:** Lighthouse reste > 85 après le changement?
3. **Accessibilité:** Les éléments sont-ils sémantiques?
4. **Maintenabilité:** Quelqu'un d'autre peut-il comprendre/modifier ce code?
5. **Cohérence:** Ça suit le même pattern que AfriAI?

---

**Bonne chance! 🚀**

Ce prompt est complet et actionnable. À utiliser tel quel avec Claude Code pour Sirius.

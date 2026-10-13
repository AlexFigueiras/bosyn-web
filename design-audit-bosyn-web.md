# Auditoria de Identidade Visual & Design System: BOSYN (bosyn-web)

Documento consolidado de extração da identidade visual e especificações de design do repositório **bosyn-web**.
Não há omissões ou resumos nos trechos literais de arquivos de configuração e estilos.

---

## 1. Stack

### `package.json`
não encontrado

> **Nota Técnica:** O repositório é uma aplicação web estática Vanilla (HTML5, CSS3, JavaScript ES6+ modular), sem o uso de gerenciadores de pacotes Node.js (`package.json`), frameworks (Next.js, React) ou bibliotecas de componentes baseadas em runtime (TailwindCSS, shadcn/ui, Radix UI, Material UI, Headless UI). Todos os estilos, tokens e interações são providos por CSS nativo e Vanilla JS.

---

## 2. Configuração de Estilo

### `tailwind.config.*`
não encontrado

### `postcss.config.*`
não encontrado

### `components.json`
não encontrado

---

### `theme-tokens.css`
```css
/* ==========================================================================
   BOSYN HOLDING & ECOSSISTEMA - THEME TOKENS 2026
   Identidade Visual Oficial: BUILD • ORGANIZE • SYNCHRONIZE
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Mono:wght@400;500;600;700&display=swap');

:root {
    /* --- PALETA DE CORES (DESIGN TOKENS OFICIAIS) --- */
    --color-primary: #087E98;         /* Deep Teal */
    --color-primary-hover: #06657a;
    --color-primary-light: rgba(8, 126, 152, 0.12);
    
    --color-secondary: #20D5EF;       /* Vibrant Cyan */
    --color-secondary-glow: rgba(32, 213, 239, 0.4);
    --color-secondary-soft: rgba(32, 213, 239, 0.12);

    --color-accent: #05945B;          /* CTA / Emerald Green */
    --color-accent-hover: #047d4d;
    --color-accent-light: rgba(5, 148, 91, 0.12);

    --color-urgency: #F96E15;         /* Warm Orange */
    --color-destructive: #DC2828;     /* Crimson Red */

    /* Superfícies & Fundos */
    --color-bg: #EBFCFE;              /* Soft Cyan Tint oficial */
    --color-surface: #FFFFFF;         /* White Card Surface */
    --color-surface-hover: #F8FDFF;
    --color-surface-alt: #F1FAFC;
    
    /* Dark Theme / Hero Premium */
    --color-bg-dark: #060E18;         /* Deep Space Navy */
    --color-bg-dark-surface: #0B1726; /* Dark Card Surface */
    --color-bg-dark-border: rgba(32, 213, 239, 0.15);
    --color-bg-dark-card: rgba(11, 23, 38, 0.85);

    /* Textos & Tipografia */
    --color-foreground: #164D64;      /* Deep Slate Blue Text oficial */
    --color-text-title: #092635;      /* High-contrast Title */
    --color-text-muted: #527A8A;      /* Subtitle / Descriptive text */
    --color-text-dark: #F0F9FB;       /* Text for dark surfaces */
    --color-text-dark-muted: #93B5C6; /* Secondary text for dark surfaces */

    /* Elementos de Interface */
    --color-muted: #DCF0F4;           /* Soft muted container */
    --color-border: #CCDCE1;          /* Border / Input oficial */
    --color-border-focus: #087E98;

    /* Gradientes da Marca */
    --gradient-brand: linear-gradient(135deg, #20D5EF 0%, #087E98 55%, #1A365D 100%);
    --gradient-brand-glow: linear-gradient(135deg, rgba(32, 213, 239, 0.8) 0%, rgba(8, 126, 152, 0.8) 100%);
    --gradient-dark-hero: radial-gradient(circle at 50% 20%, #0d2538 0%, #060e18 80%);
    --gradient-card-dark: linear-gradient(145deg, rgba(16, 32, 51, 0.9) 0%, rgba(8, 18, 30, 0.95) 100%);
    --gradient-card-light: linear-gradient(145deg, #ffffff 0%, #f4fbfe 100%);
    --gradient-accent: linear-gradient(135deg, #05945B 0%, #087E98 100%);

    /* --- TIPOGRAFIA --- */
    --font-titles: 'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-body: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-data: 'Roboto Mono', monospace;

    /* --- SOMBRAS & ELEVAÇÃO --- */
    --shadow-sm: 0 2px 4px rgba(9, 38, 53, 0.04);
    --shadow-md: 0 8px 20px rgba(9, 38, 53, 0.08);
    --shadow-lg: 0 16px 36px rgba(9, 38, 53, 0.12);
    --shadow-glow-cyan: 0 0 30px rgba(32, 213, 239, 0.25);
    --shadow-glow-teal: 0 0 35px rgba(8, 126, 152, 0.35);

    /* --- BORDAS & RAIOS --- */
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;

    /* --- TRANSIÇÕES --- */
    --transition-fast: 0.18s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Base Global Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    background-color: var(--color-bg);
    color: var(--color-foreground);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-titles);
    color: var(--color-text-title);
    line-height: 1.2;
    letter-spacing: -0.02em;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: var(--font-titles);
    cursor: pointer;
    border: none;
    outline: none;
}

code, .font-mono {
    font-family: var(--font-data);
}
```

---

### `app.css`
```css
/* ==========================================================================
   BOSYN HOLDING & ECOSSISTEMA - APP STYLING 2026
   Modern, Ultra-Premium Tech & Institutional Architecture
   ========================================================================== */

/* --- NAVBAR & HEADER --- */
.navbar-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all var(--transition-base);
    padding: 18px 0;
}

.navbar-header.scrolled {
    background: rgba(6, 14, 24, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(32, 213, 239, 0.15);
    padding: 12px 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand-logo-link {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
}

.logo-symbol-svg {
    width: 44px;
    height: 44px;
    filter: drop-shadow(0 0 12px rgba(32, 213, 239, 0.35));
    transition: transform var(--transition-fast);
}

.brand-logo-link:hover .logo-symbol-svg {
    transform: scale(1.05) rotate(2deg);
}

.brand-text-block {
    display: flex;
    flex-direction: column;
}

.brand-main-title {
    font-family: var(--font-titles);
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 0.18em;
    color: #FFFFFF;
    line-height: 1;
}

.brand-subtitle-tag {
    font-family: var(--font-titles);
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--color-secondary);
    margin-top: 3px;
    text-transform: uppercase;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
}

.nav-link-item {
    font-family: var(--font-titles);
    font-size: 0.92rem;
    font-weight: 600;
    color: #D1E5EE;
    text-decoration: none;
    transition: color var(--transition-fast);
    position: relative;
    padding: 6px 0;
}

.nav-link-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-brand);
    transition: width var(--transition-fast);
    border-radius: 2px;
}

.nav-link-item:hover,
.nav-link-item.active {
    color: #FFFFFF;
}

.nav-link-item:hover::after,
.nav-link-item.active::after {
    width: 100%;
}

.nav-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--gradient-brand);
    color: #FFFFFF;
    font-family: var(--font-titles);
    font-size: 0.88rem;
    font-weight: 700;
    padding: 10px 22px;
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(32, 213, 239, 0.25);
    transition: all var(--transition-fast);
    cursor: pointer;
    text-decoration: none;
}

.nav-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(32, 213, 239, 0.45);
    border-color: rgba(255, 255, 255, 0.5);
}

.mobile-menu-toggle {
    display: none;
    background: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 1.6rem;
    cursor: pointer;
}

/* --- HERO SECTION --- */
.hero-section {
    position: relative;
    min-height: 100vh;
    background: var(--color-bg-dark);
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 130px 24px 80px;
}

.hero-network-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.75;
}

.hero-glow-overlay {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 700px;
    height: 500px;
    background: radial-gradient(circle, rgba(32, 213, 239, 0.18) 0%, rgba(8, 126, 152, 0.12) 45%, transparent 70%);
    filter: blur(60px);
    pointer-events: none;
    z-index: 1;
}

.hero-container {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;
}

.hero-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.hero-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(8, 126, 152, 0.25);
    border: 1px solid rgba(32, 213, 239, 0.35);
    padding: 6px 16px;
    border-radius: var(--radius-full);
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
}

.hero-badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-secondary);
    box-shadow: 0 0 10px var(--color-secondary);
    animation: pulseGlow 2s infinite ease-in-out;
}

@keyframes pulseGlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
}

.hero-badge-text {
    font-family: var(--font-data);
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-secondary);
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.hero-headline {
    font-size: 3.5rem;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1.12;
    margin-bottom: 20px;
    letter-spacing: -0.03em;
}

.hero-headline-gradient {
    background: linear-gradient(135deg, #FFFFFF 20%, #70EDFF 60%, #20D5EF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero-description {
    font-size: 1.15rem;
    color: var(--color-text-dark-muted);
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 580px;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 44px;
}

.btn-primary-hero {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--gradient-brand);
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 32px;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 25px rgba(32, 213, 239, 0.35);
    transition: all var(--transition-fast);
    border: 1px solid rgba(255, 255, 255, 0.25);
}

.btn-primary-hero:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 35px rgba(32, 213, 239, 0.55);
}

.btn-secondary-hero {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.06);
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 600;
    padding: 15px 28px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(204, 220, 225, 0.2);
    transition: all var(--transition-fast);
    backdrop-filter: blur(8px);
}

.btn-secondary-hero:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--color-secondary);
    color: var(--color-secondary);
}

.hero-metrics-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
    max-width: 580px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 24px;
}

.hero-metric-item {
    display: flex;
    flex-direction: column;
}

.hero-metric-number {
    font-family: var(--font-data);
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--color-secondary);
    line-height: 1;
    margin-bottom: 4px;
}

.hero-metric-label {
    font-size: 0.8rem;
    color: var(--color-text-dark-muted);
    line-height: 1.3;
}

/* Hero Right Interactive Hologram / Visual Card */
.hero-visual-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
}

.hero-interactive-card {
    background: var(--gradient-card-dark);
    border: 1px solid rgba(32, 213, 239, 0.25);
    border-radius: var(--radius-xl);
    padding: 32px;
    width: 100%;
    max-width: 480px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(32, 213, 239, 0.15);
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
}

.hero-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.hero-card-title-group {
    display: flex;
    align-items: center;
    gap: 12px;
}

.hero-card-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(5, 148, 91, 0.18);
    border: 1px solid rgba(5, 148, 91, 0.4);
    padding: 4px 10px;
    border-radius: var(--radius-full);
    font-family: var(--font-data);
    font-size: 0.72rem;
    color: #4ade80;
}

.live-indicator-dot {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    animation: blinkDot 1.4s infinite;
}

@keyframes blinkDot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.hero-card-ecosystem-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.hero-eco-node {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: var(--radius-md);
    padding: 14px 16px;
    transition: all var(--transition-fast);
}

.hero-eco-node:hover {
    background: rgba(32, 213, 239, 0.08);
    border-color: rgba(32, 213, 239, 0.3);
    transform: translateX(4px);
}

.eco-node-left {
    display: flex;
    align-items: center;
    gap: 12px;
}

.eco-node-icon-box {
    width: 38px;
    height: 38px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 126, 152, 0.25);
    color: var(--color-secondary);
}

.eco-node-icon-box.health {
    background: rgba(32, 213, 239, 0.15);
    color: #20D5EF;
}

.eco-node-icon-box.arch {
    background: rgba(249, 110, 21, 0.15);
    color: #F96E15;
}

.eco-node-icon-box.gov {
    background: rgba(5, 148, 91, 0.15);
    color: #05945B;
}

.eco-node-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: #FFFFFF;
}

.eco-node-meta {
    font-size: 0.75rem;
    color: var(--color-text-dark-muted);
}

.eco-node-badge {
    font-family: var(--font-data);
    font-size: 0.72rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: var(--radius-sm);
    background: rgba(255, 255, 255, 0.06);
    color: var(--color-secondary);
    border: 1px solid rgba(32, 213, 239, 0.2);
}

/* --- SECTION GENERAL STYLING --- */
.section-wrapper {
    padding: 100px 24px;
    position: relative;
}

.section-wrapper.light-bg {
    background: var(--color-bg);
}

.section-wrapper.white-bg {
    background: #FFFFFF;
}

.section-wrapper.dark-bg {
    background: var(--color-bg-dark);
    color: var(--color-text-dark);
}

.section-container {
    max-width: 1280px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    max-width: 780px;
    margin: 0 auto 60px;
}

.section-tag {
    display: inline-block;
    font-family: var(--font-data);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    color: var(--color-primary);
    text-transform: uppercase;
    margin-bottom: 12px;
    background: var(--color-primary-light);
    padding: 4px 14px;
    border-radius: var(--radius-full);
}

.section-tag.dark {
    color: var(--color-secondary);
    background: rgba(32, 213, 239, 0.12);
}

.section-title {
    font-size: 2.6rem;
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--color-text-muted);
    line-height: 1.6;
}

.section-subtitle.dark {
    color: var(--color-text-dark-muted);
}

/* --- PHILOSOPHY (BUILD • ORGANIZE • SYNCHRONIZE) --- */
.philosophy-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.philosophy-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 38px 32px;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.philosophy-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-brand);
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.philosophy-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
}

.philosophy-card:hover::before {
    opacity: 1;
}

.philosophy-icon-wrap {
    width: 60px;
    height: 60px;
    border-radius: var(--radius-md);
    background: var(--color-muted);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: all var(--transition-fast);
}

.philosophy-card:hover .philosophy-icon-wrap {
    background: var(--color-primary);
    color: #FFFFFF;
    transform: scale(1.08);
}

.philosophy-keyword {
    font-family: var(--font-data);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    color: var(--color-primary);
    text-transform: uppercase;
    margin-bottom: 8px;
}

.philosophy-card-title {
    font-size: 1.65rem;
    font-weight: 800;
    margin-bottom: 14px;
    color: var(--color-text-title);
}

.philosophy-card-desc {
    font-size: 0.98rem;
    color: var(--color-text-muted);
    line-height: 1.65;
    margin-bottom: 24px;
    flex-grow: 1;
}

.philosophy-card-bullet-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-top: 1px solid var(--color-muted);
    padding-top: 18px;
}

.philosophy-bullet-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--color-foreground);
}

.bullet-check-icon {
    color: var(--color-accent);
    flex-shrink: 0;
}

/* --- SAAS SHOWCASE (CONNECTASE & GESTÃO ARQ) --- */
.saas-tabs-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 48px;
}

.saas-tab-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
    border: 2px solid var(--color-border);
    padding: 14px 28px;
    border-radius: var(--radius-full);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--color-text-muted);
    transition: all var(--transition-fast);
    cursor: pointer;
}

.saas-tab-btn:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
}

.saas-tab-btn.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: #FFFFFF;
    box-shadow: 0 8px 24px rgba(8, 126, 152, 0.3);
}

.saas-tab-badge {
    font-family: var(--font-data);
    font-size: 0.72rem;
    padding: 3px 8px;
    border-radius: var(--radius-sm);
    background: rgba(0, 0, 0, 0.08);
}

.saas-tab-btn.active .saas-tab-badge {
    background: rgba(255, 255, 255, 0.2);
    color: #FFFFFF;
}

.saas-product-container {
    display: none;
    animation: fadeInProduct 0.4s ease-in-out forwards;
}

.saas-product-container.active {
    display: block;
}

@keyframes fadeInProduct {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
}

.product-showcase-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 44px;
    box-shadow: var(--shadow-md);
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    gap: 48px;
    align-items: center;
}

.product-info-col {
    display: flex;
    flex-direction: column;
}

.product-endorsement {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-data);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-primary);
    letter-spacing: 0.08em;
    margin-bottom: 12px;
}

.product-title {
    font-size: 2.5rem;
    font-weight: 900;
    color: var(--color-text-title);
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.product-tagline {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: 16px;
}

.product-description {
    font-size: 1rem;
    color: var(--color-text-muted);
    line-height: 1.65;
    margin-bottom: 28px;
}

.product-features-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 32px;
}

.product-feature-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.88rem;
    color: var(--color-foreground);
    font-weight: 600;
}

.feature-icon-bullet {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--color-primary-light);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 2px;
}

.product-actions-bar {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.btn-saas-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--color-accent);
    color: #FFFFFF;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 13px 26px;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    box-shadow: 0 4px 16px rgba(5, 148, 91, 0.25);
}

.btn-saas-primary:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(5, 148, 91, 0.35);
}

.btn-saas-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--color-surface-alt);
    color: var(--color-primary);
    font-size: 0.95rem;
    font-weight: 700;
    padding: 13px 22px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    transition: all var(--transition-fast);
}

.btn-saas-secondary:hover {
    background: #FFFFFF;
    border-color: var(--color-primary);
}

/* UI Preview Mockup (Interactive Clinical & Architecture Dashboards) */
.product-preview-window {
    background: #0D1B2A;
    border-radius: var(--radius-lg);
    border: 1px solid rgba(32, 213, 239, 0.25);
    box-shadow: 0 20px 45px rgba(6, 14, 24, 0.25);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.mock-window-header {
    background: #08121E;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.mock-window-dots {
    display: flex;
    gap: 6px;
}

.mock-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.mock-dot.red { background: #DC2828; }
.mock-dot.yellow { background: #F96E15; }
.mock-dot.green { background: #05945B; }

.mock-window-title {
    font-family: var(--font-data);
    font-size: 0.75rem;
    color: #93B5C6;
    letter-spacing: 0.04em;
}

.mock-window-badge {
    font-family: var(--font-data);
    font-size: 0.68rem;
    background: rgba(32, 213, 239, 0.15);
    color: #20D5EF;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
}

.mock-dashboard-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.mock-stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
}

.mock-stat-box {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: var(--radius-sm);
    padding: 12px;
}

.mock-stat-label {
    font-size: 0.7rem;
    color: #93B5C6;
    margin-bottom: 4px;
}

.mock-stat-value {
    font-family: var(--font-data);
    font-size: 1.25rem;
    font-weight: 700;
    color: #FFFFFF;
}

.mock-stat-value.cyan { color: #20D5EF; }
.mock-stat-value.green { color: #4ade80; }
.mock-stat-value.orange { color: #F96E15; }

.mock-main-content-panel {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: var(--radius-md);
    padding: 16px;
}

.mock-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
}

.mock-panel-title {
    font-size: 0.85rem;
    font-weight: 700;
    color: #FFFFFF;
}

.mock-interactive-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.04);
    padding: 10px 12px;
    border-radius: var(--radius-sm);
    margin-bottom: 8px;
    font-size: 0.78rem;
    color: #D1E5EE;
}

.mock-status-tag {
    font-family: var(--font-data);
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
}

.mock-status-tag.active {
    background: rgba(5, 148, 91, 0.2);
    color: #4ade80;
    border: 1px solid rgba(5, 148, 91, 0.4);
}

.mock-status-tag.sync {
    background: rgba(32, 213, 239, 0.2);
    color: #20D5EF;
    border: 1px solid rgba(32, 213, 239, 0.4);
}

/* --- 4 BRAND PILLARS SECTION --- */
.pillars-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.pillar-card {
    background: var(--gradient-card-dark);
    border: 1px solid rgba(32, 213, 239, 0.2);
    border-radius: var(--radius-lg);
    padding: 32px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
}

.pillar-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-secondary);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4), var(--shadow-glow-cyan);
}

.pillar-icon-container {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(32, 213, 239, 0.12);
    border: 1px solid rgba(32, 213, 239, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-secondary);
    margin-bottom: 20px;
    transition: all var(--transition-fast);
}

.pillar-card:hover .pillar-icon-container {
    background: var(--gradient-brand);
    color: #FFFFFF;
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(32, 213, 239, 0.4);
}

.pillar-title {
    font-size: 1.3rem;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 6px;
    letter-spacing: 0.02em;
}

.pillar-tagline {
    font-family: var(--font-data);
    font-size: 0.78rem;
    color: var(--color-secondary);
    font-weight: 600;
    margin-bottom: 14px;
}

.pillar-description {
    font-size: 0.88rem;
    color: var(--color-text-dark-muted);
    line-height: 1.6;
}

/* --- SETORES DE ATUAÇÃO RIBBON --- */
.sectors-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 18px;
}

.sector-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 24px 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all var(--transition-fast);
}

.sector-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}

.sector-icon {
    width: 44px;
    height: 44px;
    color: var(--color-primary);
    margin-bottom: 12px;
    transition: transform var(--transition-fast);
}

.sector-card:hover .sector-icon {
    transform: scale(1.12);
    color: var(--color-secondary);
}

.sector-name {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--color-text-title);
    margin-bottom: 6px;
}

.sector-desc {
    font-size: 0.78rem;
    color: var(--color-text-muted);
    line-height: 1.4;
}

/* --- ECOSYSTEM & ARCHITECTURE DIAGRAM --- */
.ecosystem-diagram-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-xl);
    padding: 48px;
    box-shadow: var(--shadow-md);
}

.ecosystem-flow-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
}

.eco-holding-node {
    background: var(--gradient-card-dark);
    border: 2px solid var(--color-secondary);
    border-radius: var(--radius-lg);
    padding: 28px 48px;
    text-align: center;
    color: #FFFFFF;
    box-shadow: 0 10px 30px rgba(8, 126, 152, 0.25);
    max-width: 600px;
    width: 100%;
}

.eco-holding-title {
    font-size: 1.8rem;
    font-weight: 900;
    letter-spacing: 0.12em;
    color: #FFFFFF;
    margin-bottom: 6px;
}

.eco-holding-tag {
    font-family: var(--font-data);
    font-size: 0.82rem;
    color: var(--color-secondary);
    letter-spacing: 0.08em;
}

.eco-connector-lines {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    height: 40px;
}

.connector-line-vertical {
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--color-secondary), var(--color-primary));
}

.eco-ventures-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    width: 100%;
}

.eco-venture-box {
    background: var(--color-surface-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 24px;
    text-align: center;
    transition: all var(--transition-fast);
}

.eco-venture-box:hover {
    border-color: var(--color-primary);
    background: #FFFFFF;
    transform: translateY(-4px);
    box-shadow: var(--shadow-sm);
}

.venture-name {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--color-text-title);
    margin-bottom: 4px;
}

.venture-endorser {
    font-family: var(--font-data);
    font-size: 0.72rem;
    color: var(--color-primary);
    font-weight: 700;
    margin-bottom: 10px;
}

.venture-desc {
    font-size: 0.82rem;
    color: var(--color-text-muted);
    line-height: 1.5;
}

/* --- BRAND PERSONALITY BANNER --- */
.brand-personality-banner {
    background: #0B1726;
    border-top: 1px solid rgba(32, 213, 239, 0.15);
    border-bottom: 1px solid rgba(32, 213, 239, 0.15);
    padding: 24px 0;
}

.personality-items-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
}

.personality-item {
    font-family: var(--font-titles);
    font-size: 0.95rem;
    font-weight: 700;
    color: #D1E5EE;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.personality-dot {
    color: var(--color-secondary);
}

/* --- CONTACT & CTA SECTION --- */
.contact-cta-card {
    background: var(--gradient-card-dark);
    border: 1px solid rgba(32, 213, 239, 0.3);
    border-radius: var(--radius-xl);
    padding: 60px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(32, 213, 239, 0.15);
}

.contact-info-col {
    display: flex;
    flex-direction: column;
}

.contact-headline {
    font-size: 2.4rem;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1.15;
    margin-bottom: 16px;
}

.contact-desc {
    font-size: 1.05rem;
    color: var(--color-text-dark-muted);
    line-height: 1.65;
    margin-bottom: 32px;
}

.contact-channels {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-channel-link {
    display: flex;
    align-items: center;
    gap: 14px;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 0.95rem;
    transition: color var(--transition-fast);
}

.contact-channel-link:hover {
    color: var(--color-secondary);
}

.channel-icon-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: rgba(32, 213, 239, 0.12);
    border: 1px solid rgba(32, 213, 239, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-secondary);
}

/* Contact Interactive Form */
.contact-form-col {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    padding: 32px;
}

.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #D1E5EE;
    margin-bottom: 8px;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    background: rgba(6, 14, 24, 0.6);
    border: 1px solid rgba(204, 220, 225, 0.25);
    border-radius: var(--radius-sm);
    padding: 12px 16px;
    color: #FFFFFF;
    font-family: var(--font-body);
    font-size: 0.92rem;
    outline: none;
    transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 12px rgba(32, 213, 239, 0.3);
}

.form-select option {
    background: #0B1726;
    color: #FFFFFF;
}

.btn-submit-whatsapp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #25D366;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 700;
    padding: 14px;
    border-radius: var(--radius-sm);
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
    transition: all var(--transition-fast);
    text-decoration: none;
}

.btn-submit-whatsapp:hover {
    background: #20BA5A;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37, 211, 102, 0.45);
}

/* --- FOOTER INSTITUCIONAL --- */
.site-footer {
    background: #040910;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 60px 24px 30px;
    color: #93B5C6;
}

.footer-top-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto 48px;
}

.footer-brand-col {
    display: flex;
    flex-direction: column;
}

.footer-claim {
    font-size: 0.92rem;
    color: #D1E5EE;
    margin: 16px 0 20px;
    line-height: 1.6;
    max-width: 340px;
}

.footer-domain-badge {
    font-family: var(--font-data);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-secondary);
    letter-spacing: 0.1em;
}

.footer-col-title {
    font-family: var(--font-titles);
    font-size: 0.95rem;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 18px;
}

.footer-link-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-link-item {
    font-size: 0.88rem;
    color: #93B5C6;
    transition: color var(--transition-fast);
}

.footer-link-item:hover {
    color: var(--color-secondary);
}

.footer-bottom-bar {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    flex-wrap: wrap;
    gap: 16px;
}

.footer-bottom-copy {
    color: #6C8D9E;
}

.footer-location {
    font-family: var(--font-data);
    color: #93B5C6;
}

/* --- RESPONSIVENESS (MOBILE & TABLET) --- */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-content {
        align-items: center;
    }

    .hero-actions {
        justify-content: center;
    }

    .hero-metrics-grid {
        margin: 0 auto;
    }

    .philosophy-grid {
        grid-template-columns: 1fr;
    }

    .product-showcase-card {
        grid-template-columns: 1fr;
    }

    .pillars-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .sectors-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .contact-cta-card {
        grid-template-columns: 1fr;
    }

    .footer-top-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .nav-links, .nav-cta-btn {
        display: none;
    }

    .mobile-menu-toggle {
        display: block;
    }

    .nav-links.mobile-open {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: #060E18;
        padding: 24px;
        border-bottom: 1px solid rgba(32, 213, 239, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .hero-headline {
        font-size: 2.5rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .pillars-grid {
        grid-template-columns: 1fr;
    }

    .sectors-grid {
        grid-template-columns: 1fr 1fr;
    }

    .eco-ventures-row {
        grid-template-columns: 1fr;
    }

    .product-features-list {
        grid-template-columns: 1fr;
    }

    .footer-top-grid {
        grid-template-columns: 1fr;
    }
}
```

---

### `CTA.css`
```css
/* BOSYN CTA Component Styles 2026 */
.cta-section {
    background: var(--color-bg-dark);
    padding: 90px 24px;
    text-align: center;
    color: #FFFFFF;
}

.cta-container {
    max-width: 800px;
    margin: 0 auto;
}

.cta-title {
    font-size: 2.2rem;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 12px;
}

.cta-subtitle {
    font-size: 1.05rem;
    color: var(--color-text-dark-muted);
    margin-bottom: 32px;
}

.cta-button {
    display: inline-block;
    background: #25D366;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1rem;
    padding: 14px 32px;
    border-radius: var(--radius-md);
    text-decoration: none;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
    transition: transform var(--transition-fast);
}

.cta-button:hover {
    transform: translateY(-2px);
    background: #20BA5A;
}
```

---

### `Hero.css`
```css
/* BOSYN Hero Component Styles 2026 */
.hero-section {
    background: var(--color-bg-dark);
    padding: 100px 24px 60px;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
}

.hero-container {
    max-width: 1200px;
    margin: 0 auto;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-data);
    font-size: 0.78rem;
    color: var(--color-secondary);
    background: rgba(8, 126, 152, 0.25);
    border: 1px solid rgba(32, 213, 239, 0.3);
    padding: 6px 14px;
    border-radius: var(--radius-full);
    margin-bottom: 20px;
}

.badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-secondary);
}

.hero-headline {
    font-size: 2.8rem;
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 16px;
}

.hero-subtext {
    font-size: 1.1rem;
    color: var(--color-text-dark-muted);
    max-width: 600px;
    margin-bottom: 28px;
}

.btn-primary {
    display: inline-block;
    background: var(--gradient-brand);
    color: #FFFFFF;
    font-weight: 700;
    padding: 12px 28px;
    border-radius: var(--radius-md);
    text-decoration: none;
}
```

---

### `Manifesto.css`
```css
/* BOSYN Manifesto Component Styles 2026 */
.manifesto-section {
    background: var(--color-bg);
    padding: 80px 24px;
}

.manifesto-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
}

.manifesto-col {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 32px;
    box-shadow: var(--shadow-sm);
}

.col-title {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: 12px;
}

.col-content {
    font-size: 0.95rem;
    color: var(--color-text-muted);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .manifesto-grid {
        grid-template-columns: 1fr;
    }
}
```

---

### `RaioX.css`
```css
/* 
  BOSYN Raio-X Component Styles
  Interactive Before/After Slider
*/

.raio-x-section {
    background-color: var(--bg-offwhite);
    padding: var(--space-4xl) var(--space-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
}

.raio-x-container {
    position: relative;
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 1200 / 800;
    border-radius: var(--radius-interactive); /* Regra de Ouro: 4px */
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.image-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.image-layer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Imagem B: Efeito Raio-X Técnico em var(--accent-neon) */
.image-b {
    z-index: 2;
    clip-path: inset(0 50% 0 0); /* Controlado pelo JS */
    filter: invert(1) grayscale(1) brightness(0.8) sepia(1) hue-rotate(150deg) saturate(15);
}

/* Slider Input Reset */
.raio-x-slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    margin: 0;
    appearance: none;
    -webkit-appearance: none;
    background: transparent;
    cursor: ew-resize;
}

.raio-x-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 40px;
    height: 100%;
    background: transparent;
}

.raio-x-slider::-moz-range-thumb {
    width: 40px;
    height: 100%;
    background: transparent;
    border: none;
}

/* Handle Visual Customizado */
.slider-handle {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: var(--black-logo);
    z-index: 5;
    pointer-events: none;
    transform: translateX(-50%);
}

.handle-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background-color: var(--black-logo);
    border: 2px solid var(--accent-neon);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Linha vertical fina no círculo */
.handle-line {
    width: 1px;
    height: 16px;
    background-color: var(--accent-neon);
}

/* Conteúdo de Texto */
.raio-x-content {
    text-align: center;
    max-width: 600px;
    margin-top: var(--space-lg);
}

.raio-x-title {
    font-family: var(--font-family-title);
    font-weight: var(--font-weight-title);
    color: var(--text-charcoal);
    font-size: 2rem;
    margin-bottom: var(--space-md);
}

.raio-x-copy {
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-body-regular);
    color: var(--text-charcoal);
    font-size: 1.15rem;
    line-height: 1.6;
    opacity: 0.85;
}
```

---

### `Verticais.css`
```css
/* BOSYN Verticais Component Styles 2026 */
.verticais-section {
    background: #FFFFFF;
    padding: 80px 24px;
}

.verticais-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    max-width: 1200px;
    margin: 0 auto;
}

.vertical-card {
    background: var(--color-surface-alt);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 32px;
    transition: all var(--transition-fast);
}

.vertical-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    background: #FFFFFF;
}

.card-tag {
    display: inline-block;
    font-family: var(--font-data);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 12px;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--color-text-title);
    margin-bottom: 10px;
}

.card-text {
    font-size: 0.92rem;
    color: var(--color-text-muted);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .verticais-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 3. Fontes

### Arquivo que carrega as fontes: `theme-tokens.css` (linha 6)
```css
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans:ital,wght@0,300..800;1,300..800&family=Roboto+Mono:wght@400;500;600;700&display=swap');
```

**Mapeamento de Famílias Tipográficas:**
- **Títulos (`--font-titles`)**: `'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Pesos: 300 a 900 (normal e itálico)
- **Corpo (`--font-body`)**: `'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Pesos: 300 a 800 (normal e itálico)
- **Dados / Badges / Monospace (`--font-data`)**: `'Roboto Mono', monospace`
  - Pesos: 400, 500, 600, 700

### Arquivos de fonte locais (.woff2 / .ttf)
não encontrado
*(Todas as famílias tipográficas são requisitadas externamente via Google Fonts CDN).*

---

## 4. Metadados

### Trecho Literal do `<head>`: `index.html` (linhas 3 a 25)
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO & Metadados de Autoridade -->
    <title>BOSYN | Build • Organize • Synchronize | Holding & Ecossistema de Soluções</title>
    <meta name="description" content="A BOSYN cria tecnologia que integra, organiza e sincroniza dados e processos para impulsionar negócios e melhorar vidas. Conheça as soluções Connectase e Gestão Arq.">
    <meta name="keywords" content="BOSYN, Connectase, Gestão Arq, Healthtech, SaaS Clinico, Software Arquitetura, Holding de Tecnologia, Presidente Prudente">
    <meta name="author" content="BOSYN Group">
    
    <!-- Open Graph / Redes Sociais -->
    <meta property="og:title" content="BOSYN | Build • Organize • Synchronize">
    <meta property="og:description" content="Um ecossistema de soluções que se conectam para transformar o presente e construir o futuro.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://bosyn.com.br">

    <!-- Favicon SVG oficial BOSYN -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='fav' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%2320D5EF'/><stop offset='50%25' stop-color='%23087E98'/><stop offset='100%25' stop-color='%231B3B6F'/></linearGradient></defs><rect width='100' height='100' rx='22' fill='%23060E18'/><path d='M30 22 C30 18, 52 18, 62 25 C72 32, 72 44, 60 48 C74 52, 74 68, 62 75 C50 82, 30 82, 30 78 Z' fill='none' stroke='url(%23fav)' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/></svg>">

    <!-- Design Tokens & Component Stylesheets -->
    <link rel="stylesheet" href="theme-tokens.css">
    <link rel="stylesheet" href="app.css">
</head>
```

- **Title**: `BOSYN | Build • Organize • Synchronize | Holding & Ecossistema de Soluções`
- **Description**: `A BOSYN cria tecnologia que integra, organiza e sincroniza dados e processos para impulsionar negócios e melhorar vidas. Conheça as soluções Connectase e Gestão Arq.`
- **Open Graph (og:title)**: `BOSYN | Build • Organize • Synchronize`
- **Open Graph (og:description)**: `Um ecossistema de soluções que se conectam para transformar o presente e construir o futuro.`
- **Open Graph (og:type)**: `website`
- **Open Graph (og:url)**: `https://bosyn.com.br`
- **themeColor**: não encontrado
- **manifest**: não encontrado
- **Favicon**: Data URI inline SVG definido em `index.html` (linha 20).

---

## 5. Logos e Ícones da Marca

### Favicon SVG Oficial (Data URI de `index.html`, linha 20)
```xml
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
    <defs>
        <linearGradient id='fav' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stop-color='#20D5EF'/>
            <stop offset='50%' stop-color='#087E98'/>
            <stop offset='100%' stop-color='#1B3B6F'/>
        </linearGradient>
    </defs>
    <rect width='100' height='100' rx='22' fill='#060E18'/>
    <path d='M30 22 C30 18, 52 18, 62 25 C72 32, 72 44, 60 48 C74 52, 74 68, 62 75 C50 82, 30 82, 30 78 Z' fill='none' stroke='url(#fav)' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'/>
</svg>
```

---

### Logo Símbolo Principal BOSYN: Ribbon B (`index.html`, linhas 35 a 58)
```xml
<svg class="logo-symbol-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="logoGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stop-color="#20D5EF"/>
            <stop offset="55%" stop-color="#087E98"/>
            <stop offset="100%" stop-color="#1B3B6F"/>
        </linearGradient>
        <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="glow"/>
            <feComposite in="SourceGraphic" in2="glow" operator="over"/>
        </filter>
    </defs>
    <!-- Símbolo Ribbon B Estilizado e Contínuo -->
    <rect x="5" y="5" width="110" height="110" rx="28" fill="#0B1726" stroke="rgba(32, 213, 239, 0.3)" stroke-width="2"/>
    <path d="M36 28 H62 C74 28 82 36 82 46 C82 54 75 60 66 62 C77 64 86 71 86 82 C86 92 76 100 62 100 H36 C32 100 30 96 30 92 V36 C30 32 32 28 36 28 Z" 
          fill="none" 
          stroke="url(#logoGrad)" 
          stroke-width="11" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          filter="url(#logoGlow)"/>
    <path d="M42 45 H60 C64 45 68 48 68 52 C68 56 64 59 60 59 H42 V45 Z" fill="none" stroke="#20D5EF" stroke-width="4" opacity="0.6"/>
    <path d="M42 69 H62 C67 69 71 72 71 77 C71 82 67 85 62 85 H42 V69 Z" fill="none" stroke="#087E98" stroke-width="4" opacity="0.6"/>
</svg>
```

---

### Ícone Oficial WhatsApp: Botão de Conversão (`index.html`, linhas 835 a 837)
```xml
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.06-.1-.22-.16-.47-.28Z"/>
</svg>
```

---

### Ícone Connectase / Saúde (`index.html`, linhas 164, 320, 638)
```xml
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
</svg>
```

---

### Ícone Gestão Arq / Arquitetura (`index.html`, linhas 178, 325)
```xml
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M3 21h18M5 21V7l8-4 6 4v14M8 11h2M8 15h2M14 11h2M14 15h2"/>
</svg>
```

---

### Imagens PNG/JPG Locais
não encontrado

*(Imagens remotas utilizadas: Unsplash URL em `RaioX.html`, com proporção de 1200 x 800 px, `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80`).*

---

## 6. Componentes Base

### 6.1. Buttons

#### Código HTML: Botões Hero, Nav, Form & Tabs (`index.html` e `CTA.html`)
```html
<!-- Nav CTA Button -->
<a href="#contato" class="nav-cta-btn">
    <span>Falar com o Grupo</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</a>

<!-- Hero Primary & Secondary Buttons -->
<div class="hero-actions">
    <a href="#solucoes-saas" class="btn-primary-hero">
        <span>Explorar Soluções SaaS</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
    <a href="#filosofia" class="btn-secondary-hero">
        <span>Nosso Padrão</span>
    </a>
</div>

<!-- SaaS Tab Switcher Button -->
<button class="saas-tab-btn active" data-target="product-connectase">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
    <span>CONNECTASE</span>
    <span class="saas-tab-badge">Healthtech</span>
</button>

<!-- SaaS Action Buttons (Demonstração & Simulação) -->
<a href="https://wa.me/5518981290642?text=Ol%C3%A1" target="_blank" rel="noopener noreferrer" class="btn-saas-primary">
    <span>Solicitar Demonstração Clínica</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</a>
<button id="demoAddClinicalNoteBtn" class="btn-saas-secondary">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
    <span>Simular Registro</span>
</button>

<!-- WhatsApp Direct Submit Button -->
<button type="submit" id="bosynDirectWhatsAppBtn" class="btn-submit-whatsapp">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">...</svg>
    <span>Iniciar Contato via WhatsApp</span>
</button>

<!-- CTA Component Standalone Button (de CTA.html) -->
<a href="https://wa.me/5518981290642?text=Ol%C3%A1" target="_blank" rel="noopener noreferrer" class="cta-button">
    <span>Falar via WhatsApp (+55 18 98129-0642)</span>
</a>
```

#### Código CSS dos Botões (`app.css` e `CTA.css`)
```css
.nav-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--gradient-brand);
    color: #FFFFFF;
    font-family: var(--font-titles);
    font-size: 0.88rem;
    font-weight: 700;
    padding: 10px 22px;
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(32, 213, 239, 0.25);
    transition: all var(--transition-fast);
    cursor: pointer;
    text-decoration: none;
}
.nav-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 30px rgba(32, 213, 239, 0.45);
    border-color: rgba(255, 255, 255, 0.5);
}

.btn-primary-hero {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--gradient-brand);
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 700;
    padding: 15px 32px;
    border-radius: var(--radius-md);
    box-shadow: 0 4px 25px rgba(32, 213, 239, 0.35);
    transition: all var(--transition-fast);
    border: 1px solid rgba(255, 255, 255, 0.25);
}
.btn-primary-hero:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 35px rgba(32, 213, 239, 0.55);
}

.btn-secondary-hero {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255, 255, 255, 0.06);
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 600;
    padding: 15px 28px;
    border-radius: var(--radius-md);
    border: 1px solid rgba(204, 220, 225, 0.2);
    transition: all var(--transition-fast);
    backdrop-filter: blur(8px);
}
.btn-secondary-hero:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--color-secondary);
    color: var(--color-secondary);
}

.btn-saas-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--color-accent);
    color: #FFFFFF;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 13px 26px;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    box-shadow: 0 4px 16px rgba(5, 148, 91, 0.25);
}
.btn-saas-primary:hover {
    background: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(5, 148, 91, 0.35);
}

.btn-saas-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--color-surface-alt);
    color: var(--color-primary);
    font-size: 0.95rem;
    font-weight: 700;
    padding: 13px 22px;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    transition: all var(--transition-fast);
}
.btn-saas-secondary:hover {
    background: #FFFFFF;
    border-color: var(--color-primary);
}

.btn-submit-whatsapp {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #25D366;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 700;
    padding: 14px;
    border-radius: var(--radius-sm);
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
    transition: all var(--transition-fast);
    text-decoration: none;
}
.btn-submit-whatsapp:hover {
    background: #20BA5A;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(37, 211, 102, 0.45);
}

.cta-button {
    display: inline-block;
    background: #25D366;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 1rem;
    padding: 14px 32px;
    border-radius: var(--radius-md);
    text-decoration: none;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.35);
    transition: transform var(--transition-fast);
}
.cta-button:hover {
    transform: translateY(-2px);
    background: #20BA5A;
}
```

---

### 6.2. Input & Formulários

#### Código HTML: Formulário de Contato (`index.html`, linhas 808 a 841)
```html
<form id="bosynLeadForm">
    <div class="form-group">
        <label class="form-label" for="leadName">Seu Nome / Profissional</label>
        <input type="text" id="leadName" class="form-input" placeholder="Ex: Dr. Alexandre Figueiras" required>
    </div>

    <div class="form-group">
        <label class="form-label" for="leadOrg">Empresa, Clínica ou Escritório</label>
        <input type="text" id="leadOrg" class="form-input" placeholder="Ex: Clínica Alpha / Escritório de Arquitetura">
    </div>

    <div class="form-group">
        <label class="form-label" for="leadInterest">Área de Interesse Principal</label>
        <select id="leadInterest" class="form-select">
            <option value="CONNECTASE (Healthtech / Gestão Clínica)">CONNECTASE (Healthtech / Gestão Clínica)</option>
            <option value="GESTÃO ARQ (SaaS para Arquitetura)">GESTÃO ARQ (SaaS para Arquitetura)</option>
            <option value="Parcerias Corporativas & Tecnologia">Parcerias Corporativas & Tecnologia</option>
            <option value="BOSYN Venture Hub & Investimentos">BOSYN Venture Hub & Investimentos</option>
        </select>
    </div>

    <div class="form-group">
        <label class="form-label" for="leadMessage">Mensagem / Objetivo</label>
        <textarea id="leadMessage" class="form-textarea" rows="3" placeholder="Conte brevemente sobre o seu momento operacional ou projeto..."></textarea>
    </div>

    <button type="submit" id="bosynDirectWhatsAppBtn" class="btn-submit-whatsapp">
        <!-- Ícone WhatsApp -->
        <span>Iniciar Contato via WhatsApp</span>
    </button>
</form>
```

#### Código CSS dos Inputs (`app.css`, linhas 1309 a 1347)
```css
.form-group {
    margin-bottom: 20px;
}

.form-label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #D1E5EE;
    margin-bottom: 8px;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    background: rgba(6, 14, 24, 0.6);
    border: 1px solid rgba(204, 220, 225, 0.25);
    border-radius: var(--radius-sm);
    padding: 12px 16px;
    color: #FFFFFF;
    font-family: var(--font-body);
    font-size: 0.92rem;
    outline: none;
    transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    border-color: var(--color-secondary);
    box-shadow: 0 0 12px rgba(32, 213, 239, 0.3);
}

.form-select option {
    background: #0B1726;
    color: #FFFFFF;
}
```

---

### 6.3. Cards

#### Código HTML dos Cards de Filosofia, Pilares e Setores (`index.html`)
```html
<!-- Card de Filosofia -->
<div class="philosophy-card">
    <div class="philosophy-icon-wrap">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">...</svg>
    </div>
    <span class="philosophy-keyword">01. Pilar de Criação</span>
    <h3 class="philosophy-card-title">BUILD</h3>
    <p class="philosophy-card-desc">Construir soluções e produtos que entreguem valor real...</p>
    <ul class="philosophy-card-bullet-list">
        <li class="philosophy-bullet-item"><span class="bullet-check-icon">✓</span> Engenharia de software escalável</li>
    </ul>
</div>

<!-- Card de Pilares Dark -->
<div class="pillar-card">
    <div class="pillar-icon-container">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">...</svg>
    </div>
    <h3 class="pillar-title">CONEXÃO</h3>
    <div class="pillar-tagline">Integração que aproxima</div>
    <p class="pillar-description">Conectamos profissionais, pessoas, pacientes e parceiros...</p>
</div>

<!-- Card de Setor -->
<div class="sector-card">
    <div class="sector-icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">...</svg>
    </div>
    <h3 class="sector-name">SAÚDE</h3>
    <p class="sector-desc">Healthtechs e sistemas de registro e gestão clínica contínua.</p>
</div>
```

#### Código CSS dos Cards (`app.css`)
```css
.philosophy-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 38px 32px;
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.philosophy-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-brand);
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.philosophy-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
}

.philosophy-card:hover::before {
    opacity: 1;
}

.pillar-card {
    background: var(--gradient-card-dark);
    border: 1px solid rgba(32, 213, 239, 0.2);
    border-radius: var(--radius-lg);
    padding: 32px 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all var(--transition-base);
    position: relative;
    overflow: hidden;
}

.pillar-card:hover {
    transform: translateY(-8px);
    border-color: var(--color-secondary);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4), var(--shadow-glow-cyan);
}

.sector-card {
    background: #FFFFFF;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 24px 18px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all var(--transition-fast);
}

.sector-card:hover {
    border-color: var(--color-primary);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
}
```

---

### 6.4. Badge / Pill

#### Código HTML dos Badges (`index.html`)
```html
<!-- Hero Badge Pill -->
<div class="hero-badge-pill">
    <span class="hero-badge-dot"></span>
    <span class="hero-badge-text">BOSYN GROUP • BUILD • ORGANIZE • SYNCHRONIZE</span>
</div>

<!-- Section Tag (Light & Dark) -->
<span class="section-tag">Filosofia Proprietária</span>
<span class="section-tag dark">Fundamentos da Identidade</span>

<!-- Status Badge com Indicador Pulsante -->
<div class="hero-card-status-badge">
    <span class="live-indicator-dot"></span>
    <span>Operações Ativas</span>
</div>

<!-- Mock Status Tag -->
<span class="mock-status-tag active">✓ Prontuário Seguro</span>
<span class="mock-status-tag sync">🔄 Sincronizado</span>
```

#### Código CSS dos Badges (`app.css`)
```css
.hero-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(8, 126, 152, 0.25);
    border: 1px solid rgba(32, 213, 239, 0.35);
    padding: 6px 16px;
    border-radius: var(--radius-full);
    margin-bottom: 24px;
    backdrop-filter: blur(8px);
}

.hero-badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-secondary);
    box-shadow: 0 0 10px var(--color-secondary);
    animation: pulseGlow 2s infinite ease-in-out;
}

.hero-badge-text {
    font-family: var(--font-data);
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-secondary);
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.section-tag {
    display: inline-block;
    font-family: var(--font-data);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    color: var(--color-primary);
    text-transform: uppercase;
    margin-bottom: 12px;
    background: var(--color-primary-light);
    padding: 4px 14px;
    border-radius: var(--radius-full);
}

.section-tag.dark {
    color: var(--color-secondary);
    background: rgba(32, 213, 239, 0.12);
}

.hero-card-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(5, 148, 91, 0.18);
    border: 1px solid rgba(5, 148, 91, 0.4);
    padding: 4px 10px;
    border-radius: var(--radius-full);
    font-family: var(--font-data);
    font-size: 0.72rem;
    color: #4ade80;
}

.mock-status-tag {
    font-family: var(--font-data);
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: var(--radius-sm);
}

.mock-status-tag.active {
    background: rgba(5, 148, 91, 0.2);
    color: #4ade80;
    border: 1px solid rgba(5, 148, 91, 0.4);
}

.mock-status-tag.sync {
    background: rgba(32, 213, 239, 0.2);
    color: #20D5EF;
    border: 1px solid rgba(32, 213, 239, 0.4);
}
```

---

### 6.5. Header / Navbar

#### Código HTML: Header Completo (`index.html`, linhas 31 a 94)
```html
<header class="navbar-header" id="navbarHeader">
    <div class="nav-container">
        <!-- Brand Logo Oficial BOSYN -->
        <a href="#hero" class="brand-logo-link" aria-label="BOSYN Home">
            <svg class="logo-symbol-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGrad" x1="10%" y1="0%" x2="90%" y2="100%">
                        <stop offset="0%" stop-color="#20D5EF"/>
                        <stop offset="55%" stop-color="#087E98"/>
                        <stop offset="100%" stop-color="#1B3B6F"/>
                    </linearGradient>
                    <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="glow"/>
                        <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                    </filter>
                </defs>
                <rect x="5" y="5" width="110" height="110" rx="28" fill="#0B1726" stroke="rgba(32, 213, 239, 0.3)" stroke-width="2"/>
                <path d="M36 28 H62 C74 28 82 36 82 46 C82 54 75 60 66 62 C77 64 86 71 86 82 C86 92 76 100 62 100 H36 C32 100 30 96 30 92 V36 C30 32 32 28 36 28 Z" 
                      fill="none" 
                      stroke="url(#logoGrad)" 
                      stroke-width="11" 
                      stroke-linecap="round" 
                      stroke-linejoin="round"
                      filter="url(#logoGlow)"/>
                <path d="M42 45 H60 C64 45 68 48 68 52 C68 56 64 59 60 59 H42 V45 Z" fill="none" stroke="#20D5EF" stroke-width="4" opacity="0.6"/>
                <path d="M42 69 H62 C67 69 71 72 71 77 C71 82 67 85 62 85 H42 V69 Z" fill="none" stroke="#087E98" stroke-width="4" opacity="0.6"/>
            </svg>
            <div class="brand-text-block">
                <span class="brand-main-title">BOSYN</span>
                <span class="brand-subtitle-tag">BUILD • ORGANIZE • SYNCHRONIZE</span>
            </div>
        </a>

        <!-- Menu de Navegação -->
        <nav>
            <ul class="nav-links" id="navLinks">
                <li><a href="#filosofia" class="nav-link-item">Filosofia</a></li>
                <li><a href="#solucoes-saas" class="nav-link-item">Soluções SaaS</a></li>
                <li><a href="#pilares" class="nav-link-item">Pilares</a></li>
                <li><a href="#setores" class="nav-link-item">Setores</a></li>
                <li><a href="#ecossistema" class="nav-link-item">Ecossistema</a></li>
                <li><a href="#contato" class="nav-link-item">Contato</a></li>
            </ul>
        </nav>

        <!-- CTA Header -->
        <div class="nav-cta-wrap">
            <a href="#contato" class="nav-cta-btn">
                <span>Falar com o Grupo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>

        <!-- Botão Mobile -->
        <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Abrir Menu" aria-expanded="false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
        </button>
    </div>
</header>
```

#### Código CSS do Header (`app.css`, linhas 7 a 148)
```css
.navbar-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: all var(--transition-base);
    padding: 18px 0;
}

.navbar-header.scrolled {
    background: rgba(6, 14, 24, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(32, 213, 239, 0.15);
    padding: 12px 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.brand-logo-link {
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
}

.logo-symbol-svg {
    width: 44px;
    height: 44px;
    filter: drop-shadow(0 0 12px rgba(32, 213, 239, 0.35));
    transition: transform var(--transition-fast);
}

.brand-logo-link:hover .logo-symbol-svg {
    transform: scale(1.05) rotate(2deg);
}

.brand-text-block {
    display: flex;
    flex-direction: column;
}

.brand-main-title {
    font-family: var(--font-titles);
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 0.18em;
    color: #FFFFFF;
    line-height: 1;
}

.brand-subtitle-tag {
    font-family: var(--font-titles);
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    color: var(--color-secondary);
    margin-top: 3px;
    text-transform: uppercase;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
}

.nav-link-item {
    font-family: var(--font-titles);
    font-size: 0.92rem;
    font-weight: 600;
    color: #D1E5EE;
    text-decoration: none;
    transition: color var(--transition-fast);
    position: relative;
    padding: 6px 0;
}

.nav-link-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-brand);
    transition: width var(--transition-fast);
    border-radius: 2px;
}

.nav-link-item:hover,
.nav-link-item.active {
    color: #FFFFFF;
}

.nav-link-item:hover::after,
.nav-link-item.active::after {
    width: 100%;
}
```

---

### 6.6. Footer

#### Código HTML do Footer (`index.html`, linhas 849 a 906)
```html
<footer class="site-footer">
    <div class="footer-top-grid">
        <!-- Brand info -->
        <div class="footer-brand-col">
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-family: var(--font-titles); font-size: 1.4rem; font-weight: 900; color: #FFFFFF; letter-spacing: 0.15em;">BOSYN</span>
            </div>
            <p class="footer-claim">
                Um ecossistema de soluções que se conectam para transformar o presente e construir o futuro.
            </p>
            <span class="footer-domain-badge">BOSYN.COM.BR</span>
        </div>

        <!-- Navegação -->
        <div>
            <h4 class="footer-col-title">Ecossistema</h4>
            <ul class="footer-link-list">
                <li><a href="#solucoes-saas" class="footer-link-item">CONNECTASE Healthtech</a></li>
                <li><a href="#solucoes-saas" class="footer-link-item">GESTÃO ARQ</a></li>
                <li><a href="#ecossistema" class="footer-link-item">Venture Hub & Padrão</a></li>
                <li><a href="#setores" class="footer-link-item">Setores de Atuação</a></li>
            </ul>
        </div>

        <!-- Institucional -->
        <div>
            <h4 class="footer-col-title">Institucional</h4>
            <ul class="footer-link-list">
                <li><a href="#filosofia" class="footer-link-item">Filosofia BOSYN</a></li>
                <li><a href="#pilares" class="footer-link-item">Pilares de Rigor</a></li>
                <li><a href="#hero" class="footer-link-item">Governança Corporativa</a></li>
                <li><a href="#contato" class="footer-link-item">Relacionamento</a></li>
            </ul>
        </div>

        <!-- Endereço & Local -->
        <div>
            <h4 class="footer-col-title">Localização</h4>
            <p style="font-size: 0.88rem; line-height: 1.6; color: #93B5C6;">
                Rua Sete de Setembro, 663<br>
                Presidente Prudente — SP<br>
                Brasil
            </p>
            <div style="margin-top: 12px; font-family: var(--font-data); font-size: 0.78rem; color: var(--color-secondary);">
                WhatsApp: +55 (18) 98129-0642
            </div>
        </div>
    </div>

    <div class="footer-bottom-bar">
        <div class="footer-bottom-copy">
            BOSYN Group © 2026 | Build • Organize • Synchronize. Todos os direitos reservados.
        </div>
        <div class="footer-location">
            CONNECTASE — A BOSYN Company | GESTÃO ARQ — A BOSYN Company
        </div>
    </div>
</footer>
```

#### Código CSS do Footer (`app.css`, linhas 1372 a 1456)
```css
.site-footer {
    background: #040910;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 60px 24px 30px;
    color: #93B5C6;
}

.footer-top-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 40px;
    max-width: 1280px;
    margin: 0 auto 48px;
}

.footer-brand-col {
    display: flex;
    flex-direction: column;
}

.footer-claim {
    font-size: 0.92rem;
    color: #D1E5EE;
    margin: 16px 0 20px;
    line-height: 1.6;
    max-width: 340px;
}

.footer-domain-badge {
    font-family: var(--font-data);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-secondary);
    letter-spacing: 0.1em;
}

.footer-col-title {
    font-family: var(--font-titles);
    font-size: 0.95rem;
    font-weight: 700;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 18px;
}

.footer-link-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-link-item {
    font-size: 0.88rem;
    color: #93B5C6;
    transition: color var(--transition-fast);
}

.footer-link-item:hover {
    color: var(--color-secondary);
}

.footer-bottom-bar {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    flex-wrap: wrap;
    gap: 16px;
}

.footer-bottom-copy {
    color: #6C8D9E;
}

.footer-location {
    font-family: var(--font-data);
    color: #93B5C6;
}
```

---

### 6.7. Modal / Dialog
não encontrado

---

### 6.8. Telas de Login / Cadastro
não encontrado

---

### 6.9. Card de Preço (Pricing)
não encontrado

*(O modelo de conversão do ecossistema BOSYN opera através de atendimento consultivo, agendamento de demonstração clínica/arquitetônica e contato corporativo direto via WhatsApp e formulário de contato).*

---

## 7. Tokens Extras

### `bundles.json`
```json
{
  "Essentials": ["concise-planning", "lint-and-validate", "git-pushing", "kaizen", "systematic-debugging"],
  "Security-Engineer": ["ethical-hacking-methodology", "burp-suite-testing", "top-web-vulnerabilities", "linux-privilege-escalation", "cloud-penetration-testing", "security-auditor", "vulnerability-scanner"],
  "Security-Developer": ["api-security-best-practices", "auth-implementation-patterns", "backend-security-coder", "frontend-security-coder", "cc-skill-security-review", "pci-compliance"],
  "Web-Wizard": ["frontend-design", "react-best-practices", "react-patterns", "nextjs-best-practices", "tailwind-patterns", "form-cro", "seo-audit"],
  "Web-Designer": ["ui-ux-pro-max", "frontend-design", "3d-web-experience", "canvas-design", "mobile-design", "scroll-experience"],
  "Fullstack": ["senior-fullstack", "frontend-developer", "backend-dev-guidelines", "api-patterns", "database-design", "stripe-integration"],
  "Agent-Architect": ["agent-evaluation", "langgraph", "mcp-builder", "prompt-engineering", "ai-agents-architect", "rag-engineer"],
  "LLM-App-Developer": ["llm-app-patterns", "rag-implementation", "prompt-caching", "context-window-management", "langfuse"],
  "Indie-Game-Dev": ["game-development/game-design", "game-development/2d-games", "game-development/3d-games", "unity-developer", "godot-gdscript-patterns", "algorithmic-art"],
  "Python-Pro": ["python-pro", "python-patterns", "fastapi-pro", "fastapi-templates", "django-pro", "python-testing-patterns", "async-python-patterns"],
  "TS-JS": ["typescript-expert", "javascript-pro", "react-best-practices", "nodejs-best-practices", "nextjs-app-router-patterns"],
  "Systems": ["rust-pro", "go-concurrency-patterns", "golang-pro", "memory-safety-patterns", "cpp-pro"],
  "Startup-Founder": ["product-manager-toolkit", "competitive-landscape", "competitor-alternatives", "launch-strategy", "copywriting", "stripe-integration"],
  "Business-Analyst": ["business-analyst", "startup-metrics-framework", "startup-financial-modeling", "market-sizing-analysis", "kpi-dashboard-design"],
  "Marketing-Growth": ["content-creator", "seo-audit", "programmatic-seo", "analytics-tracking", "ab-test-setup", "email-sequence"],
  "DevOps-Cloud": ["docker-expert", "aws-serverless", "kubernetes-architect", "terraform-specialist", "environment-setup-guide", "deployment-procedures", "bash-linux"],
  "Observability": ["observability-engineer", "distributed-tracing", "slo-implementation", "incident-responder", "postmortem-writing", "performance-engineer"],
  "Data-Analytics": ["analytics-tracking", "claude-d3js-skill", "sql-pro", "postgres-best-practices", "ab-test-setup", "database-architect"],
  "Data-Engineering": ["data-engineer", "airflow-dag-patterns", "dbt-transformation-patterns", "vector-database-engineer", "embedding-strategies"],
  "Creative-Director": ["canvas-design", "frontend-design", "content-creator", "copy-editing", "algorithmic-art", "interactive-portfolio"],
  "QA": ["test-driven-development", "systematic-debugging", "browser-automation", "e2e-testing-patterns", "ab-test-setup", "code-review-checklist", "test-fixing"],
  "Mobile": ["mobile-developer", "react-native-architecture", "flutter-expert", "ios-developer", "app-store-optimization"],
  "Integration": ["stripe-integration", "twilio-communications", "hubspot-integration", "plaid-fintech", "algolia-search"],
  "Architecture-Design": ["senior-architect", "architecture-patterns", "microservices-patterns", "event-sourcing-architect", "architecture-decision-records"],
  "DDD": ["domain-driven-design", "ddd-strategic-design", "ddd-context-mapping", "ddd-tactical-patterns", "cqrs-implementation", "event-store-design", "saga-orchestration", "projection-patterns"],
  "Automation-Builder": ["workflow-automation", "mcp-builder", "make-automation", "airtable-automation", "notion-automation", "slack-automation", "googlesheets-automation"],
  "RevOps": ["hubspot-automation", "sendgrid-automation", "zendesk-automation", "google-calendar-automation", "outlook-calendar-automation", "stripe-automation", "shopify-automation"],
  "Commerce": ["stripe-integration", "paypal-integration", "plaid-fintech", "hubspot-integration", "algolia-search", "monetization"],
  "Odoo": ["odoo-module-developer", "odoo-orm-expert", "odoo-sales-crm-expert", "odoo-ecommerce-configurator", "odoo-performance-tuner", "odoo-security-rules", "odoo-docker-deployment"],
  "Azure": ["azd-deployment", "azure-functions", "azure-ai-openai-dotnet", "azure-search-documents-py", "azure-identity-py", "azure-monitor-opentelemetry-ts"],
  "Expo": ["react-native-architecture", "expo-api-routes", "expo-dev-client", "expo-tailwind-setup", "expo-cicd-workflows", "expo-deployment", "app-store-optimization"],
  "Apple": ["hig-foundations", "hig-patterns", "hig-components-layout", "hig-inputs", "hig-components-system", "hig-platforms"],
  "Makepad": ["makepad-basics", "makepad-layout", "makepad-widgets", "makepad-event-action", "makepad-shaders", "makepad-deployment"],
  "SEO": ["seo-fundamentals", "seo-content-planner", "seo-content-writer", "seo-structure-architect", "seo-cannibalization-detector", "seo-content-auditor", "schema-markup"],
  "Office": ["office-productivity", "docx-official", "pptx-official", "xlsx-official", "pdf-official", "google-slides-automation", "google-sheets-automation"],
  "OSS": ["commit", "create-pr", "requesting-code-review", "receiving-code-review", "changelog-automation", "git-advanced-workflows", "documentation-templates"],
  "Skill-Author": ["skill-creator", "skill-developer", "writing-skills", "documentation-generation-doc-generate", "lint-and-validate", "verification-before-completion"]
}
```

### Arquivos Extras (`theme.ts`, `colors.ts`, `tokens.json`)
não encontrado

*(Os tokens estão consolidados em formato de CSS Custom Properties nativas no arquivo `theme-tokens.css`).*

---

## 8. Resumo Consolidado do Design System

### Cores Mais Usadas (Hexadecimais & RGBA)
- **#087E98** (`--color-primary`): Deep Teal institucional (cor primária de destaque, títulos de destaque e links ativos).
- **#06657a** (`--color-primary-hover`): Deep Teal escurecido para estados interativos de hover.
- **#20D5EF** (`--color-secondary`): Vibrant Cyan neon (gradientes, badges, bordas ativas e realces tecnológicos).
- **#05945B** (`--color-accent`): Emerald Green (botões de ação primária, bullets de validação e marcadores de sucesso).
- **#047d4d** (`--color-accent-hover`): Emerald Green escurecido para hover de botões de conversão.
- **#25D366** / **#20BA5A**: WhatsApp Green / Hover (botões de conversão e comunicação direta).
- **#F96E15** (`--color-urgency`): Warm Orange (destaques arquitetônicos, alertas e dados estatísticos).
- **#DC2828** (`--color-destructive`): Crimson Red (marcadores de alerta, badges de erro e janela mockup).
- **#EBFCFE** (`--color-bg`): Soft Cyan Tint (fundo claro padrão das seções institucionais).
- **#FFFFFF** (`--color-surface`): Branco puro (superfícies de cards, textos de alto contraste e headers de cards).
- **#060E18** (`--color-bg-dark`): Deep Space Navy (fundo dark principal do Hero e seção de contato).
- **#0B1726** (`--color-bg-dark-surface`): Dark Card Surface (cards escuros e ribbon de personalidade).
- **#0D1B2A** & **#08121E**: Superfícies dos mockups de software (Connectase e Gestão Arq).
- **#040910**: Fundo ultra-escuro do footer institucional.
- **#164D64** (`--color-foreground`): Deep Slate Blue (texto padrão de leitura nas seções claras).
- **#092635** (`--color-text-title`): High-contrast Dark Navy (títulos h1, h2, h3 em temas claros).
- **#527A8A** (`--color-text-muted`): Texto secundário e legendas descritivas em superfícies claras.
- **#F0F9FB** (`--color-text-dark`): Texto principal em superfícies escuras.
- **#93B5C6** (`--color-text-dark-muted`): Texto secundário e metadados em superfícies escuras.
- **#D1E5EE**: Texto de navegação e labels de inputs no tema escuro.
- **#CCDCE1** (`--color-border`): Bordas e divisores para superfícies claras.
- **#DCF0F4** (`--color-muted`): Fundo de ícones e containers secundários em modo claro.
- **#4ade80**: Verde status 'active' / 'live sync' em dashboards mockados.
- **#1A365D** / **#1B3B6F**: Deep Navy Blue (âncora escura nos gradientes lineares da marca).

### Gradientes Oficiais
- **Brand Principal**: `linear-gradient(135deg, #20D5EF 0%, #087E98 55%, #1A365D 100%)`
- **Brand Glow**: `linear-gradient(135deg, rgba(32, 213, 239, 0.8) 0%, rgba(8, 126, 152, 0.8) 100%)`
- **Dark Hero Radial**: `radial-gradient(circle at 50% 20%, #0d2538 0%, #060e18 80%)`
- **Dark Card Linear**: `linear-gradient(145deg, rgba(16, 32, 51, 0.9) 0%, rgba(8, 18, 30, 0.95) 100%)`
- **Light Card Linear**: `linear-gradient(145deg, #ffffff 0%, #f4fbfe 100%)`
- **Accent Emerald-Teal**: `linear-gradient(135deg, #05945B 0%, #087E98 100%)`
- **Hero Headline Text**: `linear-gradient(135deg, #FFFFFF 20%, #70EDFF 60%, #20D5EF 100%)`

### Famílias de Fonte (Typography Stack)
- **Família de Títulos (`--font-titles`)**: `'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Utilizado em: Cabeçalhos h1-h6, botões de ação, itens de navegação e títulos de seções.
- **Família de Corpo de Texto (`--font-body`)**: `'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Utilizado em: Parágrafos, formulários (inputs/selects/textareas), listas e textos institucionais.
- **Família de Dados e Monospace (`--font-data`)**: `'Roboto Mono', monospace`
  - Utilizado em: Badges de status, métricas numéricas, tags técnicas, dados de contato e códigos.

### Valores de Sombra Encontrados (`box-shadow`)
- `--shadow-sm`: `0 2px 4px rgba(9, 38, 53, 0.04)`
- `--shadow-md`: `0 8px 20px rgba(9, 38, 53, 0.08)`
- `--shadow-lg`: `0 16px 36px rgba(9, 38, 53, 0.12)`
- `--shadow-glow-cyan`: `0 0 30px rgba(32, 213, 239, 0.25)`
- `--shadow-glow-teal`: `0 0 35px rgba(8, 126, 152, 0.35)`
- **Navbar Scrolled**: `0 8px 32px rgba(0, 0, 0, 0.35)`
- **Nav CTA Button**: `0 0 20px rgba(32, 213, 239, 0.25)` (hover: `0 0 30px rgba(32, 213, 239, 0.45)`)
- **Primary Hero Button**: `0 4px 25px rgba(32, 213, 239, 0.35)` (hover: `0 8px 35px rgba(32, 213, 239, 0.55)`)
- **SaaS Primary Button**: `0 4px 16px rgba(5, 148, 91, 0.25)` (hover: `0 8px 24px rgba(5, 148, 91, 0.35)`)
- **WhatsApp Submit Button**: `0 4px 20px rgba(37, 211, 102, 0.3)` (hover: `0 8px 28px rgba(37, 211, 102, 0.45)`)
- **Hero Interactive Card**: `0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(32, 213, 239, 0.15)`
- **Contact Card**: `0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(32, 213, 239, 0.15)`
- **Product Preview Window**: `0 20px 45px rgba(6, 14, 24, 0.25)`
- **RaioX Container**: `0 20px 40px rgba(0, 0, 0, 0.1)`

### Valores de Raio de Borda Encontrados (`border-radius`)
- `--radius-sm`: `6px` (botões pequenos, inputs, badges internos, tags de status)
- `--radius-md`: `10px` (botões primários/secundários, nós de ecossistema, caixas de setores e ventures)
- `--radius-lg`: `16px` (cards de filosofia, pilares, colunas de manifesto, janelas de mockup)
- `--radius-xl`: `24px` (showcase de produtos, card holográfico do hero, card de contato CTA e diagramas)
- `--radius-full`: `9999px` (pills, badges de status, botões de navegação e indicadores circulares)
- **Raio de Ícone/Favicon Oficial**: `rx="22"` (favicon SVG), `rx="28"` (logo symbol SVG)
- **Raio Interativo Técnico (RaioX)**: `4px` (`--radius-interactive`)

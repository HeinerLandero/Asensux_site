# Design System: Asensux

## 1. Overview

**Creative North Star: "The Signal"**

Asensux no es una agencia de servicios — es una estación de señales digitales. Cada pagina, cada seccion, transmite una frecuencia visual distinta: potencia tecnica, precision quirurgica, innovacion con proposito.

La experiencia debe sentirse como entrar a una nave de control — oscuro, iluminado por paneles de datos, con profundidad, capas y movimiento que comunica informacion en tiempo real.

**Key Characteristics:**
- Dark-first con acento Electric Blue como unica voz de color, en ≤15% de la superficie
- Tipografia dual: Cabinet Grotesk (display) + Inter (body)
- Elevacion mediante glows azules sutiles, no sombras negras
- Motion con proposito — scroll reveals, micro-interacciones, transiciones cinematicas
- Layouts asimetricos, editoriales, no convencionales
- Rechazo explicito al cliche SaaS: cards genericas, gradientes AI, hero-metric template

## 2. Colors

Un acento saturado (Electric Blue) sobre superficies oscuras profundas. El azul no decora — seniala, dirige la atencion.

### Surface
| Token | Hex | Uso |
|---|---|---|
| **bg-deep** | `#040718` | Fondo principal, mas profundo que el navy actual |
| **bg-surface** | `#0c1628` | Superficies elevadas, cards, secciones |
| **bg-elevated** | `#14203a` | Hover de superficies, modales, dropdowns |
| **navy** | `#001f3f` | Fondo historico, hero sections |
| **navyDark** | `#001025` | Fondo ultra profundo, footer |

### Accent
| Token | Hex | Uso |
|---|---|---|
| **electricBlue** | `#0074D9` | Unico acento saturado. Botones, enlaces, highlights |
| **electricBlueLight** | `#339fff` | Hover de botones, glows secundarios |
| **electricBlueMuted** | `#1a5a8c` | Bordes en hover, badges, estados pasivos |

### Text
| Token | Hex | Uso |
|---|---|---|
| **antiFlashWhite** | `#e8edf5` | Texto principal (blanco ligeramente azulado) |
| **stone** | `#8899a0` | Texto secundario, descripciones |
| **textMuted** | `#5a6a75` | Metadata, placeholders, labels |

### Shadow / Glow Vocabulary
```css
/* Glow ambiental suave */
--glow-ambient: 0 0 30px rgba(0, 116, 217, 0.12);

/* Glow hero para elementos principales */
--glow-hero: 0 0 60px rgba(0, 116, 217, 0.2);

/* Glow hover para botones */
--glow-hover: 0 0 20px rgba(0, 116, 217, 0.35);

/* Glow card hover */
--glow-card: 0 0 40px rgba(0, 116, 217, 0.1);
```

### Named Rules
**The Single Voice Rule.** Electric Blue es el unico acento en pantalla. ElectricBlueLight y ElectricBlueMuted son variaciones de la misma voz, no colores independientes.

**The Tinted Dark Rule.** Todos los fondos oscuros llevan matiz azul (#040718, #0c1628). Nunca #000000. Nunca gris calido sobre fondo azul.

## 3. Typography

### Font Stack
| Role | Font | Fallback |
|---|---|---|
| Display | Cabinet Grotesk | `system-ui, sans-serif` |
| Body | Inter | `system-ui, sans-serif` |

Cabinet Grotesk da el look Vercel/Stripe — geometrica con presencia, tecnica pero premium. Inter para legibilidad en cuerpo a 65-75ch.

### Hierarchy
| Token | Weight | Size | Line H | Letter Sp | Uso |
|---|---|---|---|---|---|
| **display** | 700 | `clamp(3.5rem, 8vw, 7rem)` | 1.0 | -0.03em | Hero headlines |
| **heading** | 600 | `clamp(2rem, 4vw, 3.5rem)` | 1.1 | -0.025em | Section titles |
| **subheading** | 500 | `clamp(1.25rem, 2vw, 1.75rem)` | 1.2 | -0.02em | Feature titles |
| **title** | 500 | `1.25rem - 1.5rem` | 1.3 | -0.01em | Card titles |
| **body** | 400 | `1rem` | 1.7 | normal | Parrafos (max 75ch) |
| **small** | 500 | `0.75rem - 0.875rem` | 1.4 | 0.08em | Labels, tags, uppercase |

### Named Rules
**The Weight Ladder Rule.** Pesos usados: 400, 500, 600, 700. Diferencia minima 100 entre niveles adyacentes.

## 4. Elevation

Las superficies no proyectan sombra — estan iluminadas desde atras con glow azul.

### Surface Stack
1. **bg-deep** (`#040718`): fondo base
2. **bg-surface** (`#0c1628`): +1 capa, con glow ambiental
3. **bg-elevated** (`#14203a`): +2 capas, con glow hover
4. **glass**: bg-surface/70 + backdrop-blur-xl + border white/5

### Border Vocabulary
- **Rest:** `border-white/5` o `border-white/10`
- **Hover:** `border-electricBlue/20`
- **Active:** `border-electricBlue/40`
- **Focus:** `ring-2 ring-electricBlue ring-offset-2 ring-offset-bg-deep`

## 5. Components

### Buttons
- **Shape:** 12px radius (rounded-xl). Slightly pill-like but not full.
- **Primary:** electricBlue bg, antiFlashWhite text, px-8 py-4. Hover: electricBlueLight bg + glow-hover + scale(1.02).
- **Ghost:** transparent bg, antiFlashWhite/80 text. Hover: antiFlashWhite/10 bg.
- **Focus:** ring visible on keyboard nav.

### Cards
- **Corner:** 16-24px radius. Inner cards 2xl (16px), feature cards 3xl (24px).
- **Background:** bg-surface/70 con backdrop-blur, o glass.
- **Border:** white/5 rest, electricBlue/20 hover.
- **Padding:** 32-40px interno.
- **Shadow:** glow-ambient rest, glow-card hover.
- **Spotlight:** cursor-following gradient overlay on hover (opcional premium).

### Inputs
- **Style:** bg-bg-surface/50 + border-white/10 + text-antiFlashWhite.
- **Focus:** ring-2 ring-electricBlue, border-transparent.
- **Placeholder:** text-textMuted.
- **Error:** border-red/40 + text-red/80.

### Navigation
- **Style:** Fixed top, glass background (bg-deep/80 + backdrop-blur). Logo left, links center-right.
- **Links:** Inter 500, 14-16px. Underline draw from center on hover.
- **Active:** text-electricBlue + underline visible.
- **Mobile:** glass drawer con backdrop-blur-xl.

## 6. Motion Principles

- Nada decorativo. Toda animacion comunica: jerarquia, transicion, estado, feedback.
- Duracion: 300-500ms reveals, 150-200ms micro-interacciones.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` — Expo personalizado.
- No animar layout properties (width, height, top, left). Usar transform + opacity.
- Scroll reveals con stagger children + clip-path / scale-blur entries.

## 7. Layout Principles

- Cards son la respuesta perezosa. Usar editorial layouts, horizontal scroll, sticky sections.
- Variar spacing para ritmo visual. Misma padding en todos lados = monotonia.
- Contenedores con max-width pero secciones full-bleed con contenido offset.
- Layouts asimetricos, grids rotos, overlapping elements.

## 8. Do's and Don'ts

### Do:
- Usar Electric Blue como unico acento en ≤15% de superficie.
- Usar glows azules para elevacion sobre fondos oscuros.
- Mantener parrafos en 65-75ch de ancho maximo.
- Mostrar producto real (screenshots, demos) sobre ilustraciones.
- Variar layouts entre secciones — no repetir el mismo patron.

### Don't:
- Usar #000000 como fondo. Siempre bg-deep, bg-surface, o navy.
- Usar gradientes AI purpura/azul. El sistema es azul oscuro + electric blue.
- Usar cards icon+heading+text repetidas en grid simetrico.
- Usar "Elevate", "Seamless", "Next-Gen", "Game-changer" en copy.
- Usar hero-metric template (numero grande + label + stats).
- Usar modales como primera opcion. Preferir inline o progressive disclosure.
- Usar acordeon FAQ. Preferir side-by-side list o searchable help.
- Usar footer de 4 columnas con link farm. Mantener minimal.

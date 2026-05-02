<!-- SEED — re-run $impeccable document once there's code to capture the actual tokens and components. -->
---
name: Asensux
description: Soluciones tecnológicas innovadoras — sitio corporativo y producto de inventario
colors:
  primary: "#00df81"
  primary-deep: "#006241"
  surface-dark: "#002b1b"
  surface-mid: "#032221"
  surface-light: "#f1f7f6"
  muted: "#707d7d"
  bg-deep: "#04043d"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface-dark}"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
    fontWeight: 600
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
    border: "1px solid {colors.primary}"
---

# Design System: Asensux

## 1. Overview

**Creative North Star: "The Digital Forge"**

Asensux es un sitio de marca que proyecta capacidad técnica con personalidad visual fuerte. No vende servicios abstractos — demuestra producto construido. La estética combina la oscuridad de un entorno técnico con acentos vibrantes de verde que transmiten energía y crecimiento.

El sistema rechaza explícitamente el cliché SaaS: cards genéricas de icono + texto, gradientes AI púrpura, footers de 4 columnas, copy corporativo vacío. Cada sección debe mostrar algo real, no prometer algo vago.

**Key Characteristics:**
- Dark-first con acento verde caribeño como única voz de color
- Tipografía Poppins en escala audaz, sin serif complementario
- Elevación mediante glows blancos sutiles, no sombras negras
- Motion presente pero con propósito — framer-motion en scroll-reveal
- Layouts asimétricos donde es posible, grids donde es necesario

## 2. Colors

Un acento saturado sobre superficies oscuras profundamente matizadas. El verde no decora — comunica.

### Primary
- **Caribbean Green** (#00df81): Acento principal. Botones, enlaces activos, highlights, indicadores de estado. Usado en ≤15% de cualquier superficie.
- **Bangladesh Green** (#006241): Verde profundo para hover states, bordes enfocados, textos secundarios destacados.

### Secondary
- **Mountain Meadow** (#2cc295): Variante semisaturada para hover de primary y elementos que necesitan menor peso visual que el acento principal.

### Neutral
- **Rich Black** (#002b1b): Superficie principal. Fondo de secciones, cards, hero. Matizado con verde oscuro, no negro puro.
- **Dark Green** (#032221): Superficie de elevación. Capas sobre rich black, fondos de cards en secciones oscuras.
- **Anti-Flash White** (#f1f7f6): Texto principal sobre fondos oscuros. Ligeramente verdoso, no blanco puro.
- **Stone** (#707d7d): Texto secundario, labels, placeholders, descripciones.

### Named Rules
**The Single Voice Rule.** Caribbean Green es el único acento en pantalla. Mountain Meadow y Bangladesh Green son variaciones de la misma voz, no colores independientes.

**The Tinted Dark Rule.** Todos los "negros" llevan matiz verde (#002b1b, #032221). Nunca #000000. Nunca gris frío sobre fondo verde.

## 3. Typography

**Display Font:** Poppins (with system-ui, sans-serif fallback)
**Body Font:** Poppins (with system-ui, sans-serif fallback)

**Character:** Sans-serif geométrica con presencia. Poppins es amigable pero no infantil, técnica pero no fría. Un solo family para todo — la jerarquía se construye con peso y escala, no con familias distintas.

### Hierarchy
- **Display** (700, clamp 2.25-4.5rem, 1.1): Hero headlines, títulos de página. Letter-spacing negativo ligero (-0.02em).
- **Headline** (700, 2-3rem, 1.2): Section titles, nombres de servicios.
- **Title** (600, 1.25-1.5rem, 1.3): Card titles, nombres de features.
- **Body** (400, 1rem, 1.625): Texto de párrafo. Máx 65-75ch de ancho.
- **Label** (500, 0.875rem, 1.4): Tags, categorías, metadata.

### Named Rules
**The Weight Ladder Rule.** Los pesos usados son 400, 500, 600, 700 — nunca 300 ni 800+. La diferencia mínima entre niveles es 100 (600 vs 700), nunca más de 200 entre elementos adyacentes.

## 4. Elevation

El sistema usa un modelo híbrido: superficies oscuras con glows blancos sutiles como elevación, sin sombras negras tradicionales.

### Shadow Vocabulary
- **White Glow Low** (`0 0 20px 0 rgba(255,255,255,0.2)`): Card en reposo sobre fondo oscuro. No es sombra — es iluminación ambiental.
- **White Glow High** (`0 0 30px 2px rgba(255,255,255,0.4)`): Card en hover. El glow se intensifica, sugiere proximidad al usuario.
- **Caribbean Glow** (`0 0 20px #00df81` con `shadow-neonGreen`): Elementos de acción activa, badges, indicadores de selección.

### Named Rules
**The Glow-Not-Shadow Rule.** Las superficies no "proyectan sombra" — están "iluminadas desde atrás". El glow blanco sobre fondo oscuro crea profundidad sin el look genérico de shadow-md.

## 5. Components

### Buttons
- **Shape:** Gently curved edges (12px radius / `rounded-xl`). Slightly pill-like but not fully rounded.
- **Primary:** Caribbean Green (#00df81) background, Rich Black text, padding 16px 32px. Hover: 80% opacity, scale 1.05.
- **Outline:** Transparent background, Caribbean Green border and text. Hover: fills with Caribbean Green, text goes black.
- **Focus:** Ring visible on keyboard navigation. No outline hidden.

### Cards
- **Corner Style:** Rounded rectangles (16-24px). Cards interiores usan 2xl, cards de features usan 3xl.
- **Background:** Rich Black/50 con backdrop-blur, o Dark Green/40-80 con backdrop-blur.
- **Border:** White/10 en reposo. Caribbean Green en hover.
- **Padding:** Generoso interno — 32-40px. Las cards respiran.
- **Shadow:** White glow low en reposo, white glow high en hover.

### Inputs / Fields
- **Style:** Stroke + background. White background con border Stone/30 para formularios sobre fondo oscuro. Dark Green/50 con border white/10 para formularios sobre fondo claro.
- **Focus:** Ring 2px Caribbean Green, border transparente.
- **Error:** Border rojo suave, mensaje debajo en texto Stone.

### Navigation
- **Style:** Fixed top bar, Rich Black/90 con backdrop-blur. Logo izquierda, links centro-derecha.
- **Typography:** Poppins 500, 16px desktop. Links con underline animado desde la izquierda.
- **Active:** Text Caribbean Green.
- **Mobile:** Hamburger toggle, menú desplegable con backdrop-blur.

## 6. Do's and Don'ts

### Do:
- **Do** usar Caribbean Green como único acento en ≤15% de la superficie.
- **Do** usar glows blancos sutiles para elevación sobre fondos oscuros.
- **Do** mantener párrafos en 65-75ch de ancho máximo.
- **Do** usar pesos 400/500/600/700 de Poppins — nunca 300 ni 800+.
- **Do** mostrar producto real (screenshots, demos) en lugar de ilustraciones genéricas.

### Don't:
- **Don't** usar #000000 como fondo. Rich Black (#002b1b) o Dark Green (#032221) siempre.
- **Don't** usar gradientes AI púrpura/azul. El sistema es verde oscuro + verde caribeño.
- **Don't** usar cards genéricas de icono + heading + texto repetidas. Variar layouts.
- **Don't** usar "Elevate", "Seamless", "Next-Gen", "Game-changer" en el copy.
- **Don't** usar Lucide/Feather icons exclusivamente. Combinar con React Icons.
- **Don't** usar footer de 4 columnas con link farm. Mantener simple.
- **Don't** usar hero-metric template (número grande + label + stats).
- **Don't** usar modales como primera opción. Preferir inline o progressive disclosure.

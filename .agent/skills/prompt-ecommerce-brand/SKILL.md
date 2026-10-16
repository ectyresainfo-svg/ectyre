---
name: prompt-ecommerce-brand
description: Directivas de diseño de alta conversión estilo DTC / E-commerce Brand (basado en el patrón React Bits Pro Agent Kit). Enfatiza líneas limpias, esquinas rectas (ras / sharp corners, sin bordes redondeados excesivos), fotografía editorial, selectores precisos y jerarquía 60-30-10 para Ectyre.
---

# E-commerce Brand Design Skill (Ectyre Edition)

Esta skill define las pautas de diseño y arquitectura para páginas de producto (PDP) y storefronts con estética **editorial, minimalista y de alta conversión** (inspirada en marcas DTC premium y el Agent Kit de React Bits Pro).

## 1. Filosofía Visual: "Ras" / Sharp Edges (Sin bordes redondeados)
- **Bordes rectos (`rounded-none` / `border-radius: 0` o máximo 2px en elementos diminutos):**
  - Los contenedores principales, tarjetas de producto, botones de compra ("Add to Bag"), selectores de medidas/tallas y cajas de miniaturas no deben tener bordes redondeados (`border-radius: 0`).
  - Proyecta una estética de ingeniería automotriz y lujo sobrio: contornos definidos, bordes limpios y precisos (`border: 1px solid #E5E5E5` o `#000000`).

## 2. Paleta de Color Ectyre (Regla 60-30-10)
- **60% Dominante:** Fondos blancos puros (`#FFFFFF`) o tono crema sutil (`#FBFBFA`) con amplios espacios en blanco y tipografía legible.
- **30% Secundario:** Negro profundo (`#000000` / `#111111`) para títulos, textos de alta jerarquía, bordes seleccionados y el botón principal CTA ("Add to bag" / "Agregar al Carrito").
- **10% Acento:** Rojo Ectyre (`#E60000`) para badges de stock limitado/urgencia, descuentos, estado activo de miniaturas o acentos clave.

## 3. Anatomía de la Página de Producto (PDP)
1. **Header / Breadcrumb minimalista:** Línea delgada con enlaces pequeños y directos.
2. **Galería Editorial:**
   - Imagen principal de gran impacto sin fondos recargados.
   - Fila inferior o lateral de miniaturas con bordes rectos y descripción o subtítulo editorial (ej. "01 · Vista lateral", "02 · Banda de rodadura", etc.).
3. **Bloque de Título y Narrativa:**
   - Categoría / Marca en monoespaciado o tracking espaciado (`tracking-wider text-xs`).
   - Título editorial prominente (`font-serif` o sans limpio de alto peso).
   - Frase descriptiva concisa o resumen del beneficio del producto.
4. **Reseñas y Urgencia Discreta:**
   - Calificación por estrellas (ej. ★★★★☆ 4.8 · 214 reseñas verificadas).
   - Indicador de stock limitado estilizado (ej. `6 disponibles en este lote`).
5. **Selector de Medidas / Variantes:**
   - Cajas rectangulares con borde nítido (`rounded-none`).
   - Muestra dimensión técnica y precio asociado en un diseño de tarjeta plana.
6. **Selector de Cantidad y Botón de Compra Directo:**
   - Botón CTA negro sólido full-width o prominente: `[ Agregar al Carrito · $XXX.XX ]` con esquinas rectas (`rounded-none`).
   - Microinteracción instantánea de confirmación.
7. **Bloque de Confianza (Garantía y Envíos):**
   - Panel inferior con borde sutil estructurado con filas de Entrega y Devoluciones/Garantía.

# Estado actual

_Última actualización: 2026-10-16 (America/Guayaquil) · por: Codex_

## Tarea activa
T-03 — Conectar productos destacados de la página principal.

## Avance comprobado
- Casilla existente destacado renombrada a Mostrar en productos destacados; API ya la guarda.
- HeroSearchOptions usa solo featured como base, grupos de cuatro y relleno aleatorio del catálogo activo.
- Se conserva ProductCard → TireCard con compact y animación GSAP.
- Guardar un producto invalida caché del catálogo/destacados/detalle.

## Validación
- Pruebas de agrupación ejecutadas con Node: vacíos, 1/2/3/4/5/7/8/9 destacados, inactivos, deduplicación y catálogo sin mutaciones: correctas.
- Build y ESLint de archivos modificados en curso.

## Estado Git y producción
Cambios locales sin commit ni push; frontend y backend en main con otros cambios previos del usuario.
Producción conserva T-02: dpl_B6L4C7Zsvd7et1mhaDXhEpErbw8L, basado en b591ebf6eb6cfad93fdfad4572fdc05c49380c36 más MarcasPanel corregido. T-03 aún no publicada.

## Próxima acción
Completar las validaciones de T-03 y registrar sus resultados.

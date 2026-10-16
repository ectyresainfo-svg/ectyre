# Flujo Git del proyecto

_Modo: **ligero** · Estado: **propuesta**, pendiente de aprobación del usuario_

## Repositorios
| Carpeta desde ectyre.com/ | Rama actual | Remoto origin |
|---|---|---|
| frontend/ectyrepage | main, sigue origin/main | https://github.com/ectyresainfo-svg/ectyre.git |
| backend/apiectyre | main, sigue origin/main | https://github.com/ectyresainfo-svg/api-ectyre.git |

- La raíz ectyre.com no tiene repositorio Git. No se ha ejecutado git init.
- Rama base remota: por confirmar; refs/remotes/origin/HEAD no está configurado en ninguno. No confundir la rama actual con la rama base.
- Ambos repositorios ya tenían cambios sin commit al iniciar esta tarea.
- La memoria vive en el repositorio frontend. Los enlaces de raíz quedan fuera de Git; el backend contiene una referencia relativa que requiere la estructura de carpetas actual.

## Modo ligero propuesto
- Commits pequeños y separados por repositorio; incluir documentación relacionada cuando corresponda.
- No ejecutar commit, push, merge ni cambios de rama sin petición del usuario mientras esta política siga como propuesta.
- Revisar git status antes de actuar; no descartar, mover ni guardar cambios ajenos en stash.
- Nunca push --force, reset --hard ni borrar ramas con trabajo pendiente.
- Registrar sin commit, con commit, con push e integrado como estados distintos.

## Validaciones
- Memoria: script verificar-memoria.mjs de la skill, pasando la raíz correspondiente.
- Cambios frontend: npm run build y npm run lint según alcance.
- Cambios backend: validación según alcance; npm test reinicia migraciones mediante pretest, por lo que requiere comprobar previamente el entorno de pruebas.
- Esta tarea solo cambia documentación: no necesita iniciar la aplicación ni migrar bases.

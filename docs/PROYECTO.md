# Proyecto ECTYRE

_Última revisión: 2026-10-16_

## Propósito
Comercio electrónico de llantas y productos relacionados, con tienda y administración. Evidencia: package.json, AGENTS.md y rutas de los dos repositorios.

## Objetivo actual
Inicializar continuidad documental compartida. La siguiente funcionalidad de producto está por definir con el usuario.

## Stack comprobado en package.json
- Frontend: JavaScript, React 19, Vite 7, Tailwind CSS 3, Redux Toolkit, React Router 7, Axios, Radix/shadcn.
- Backend: Node.js (engines >=20.x), CommonJS, Express 4, Sequelize 6, PostgreSQL, Passport/Google OAuth, JWT, Cloudinary.

## Mapa (rutas desde ectyre.com/)
| Ruta | Contenido |
|---|---|
| frontend/ectyrepage/ | Repositorio de tienda y administración |
| backend/apiectyre/ | Repositorio de API REST |
| frontend/ectyrepage/docs/ | Memoria compartida y documentación previa |
| frontend/ectyrepage/docs/historial de secciones/ | Historial anterior conservado |
| mcp/ | Carpeta local; integración operativa por confirmar |
| _respaldo_2026-09-11_antes-arquitectura-productos/ | Copia histórica; fuera del trabajo habitual |

## Comandos (ejecutar dentro del repositorio correspondiente)
| Componente | Acción | Comando |
|---|---|---|
| Frontend | Desarrollo | npm run dev |
| Frontend | Compilar | npm run build |
| Frontend | Lint | npm run lint |
| Frontend | Previsualizar | npm run preview |
| Backend | Desarrollo | npm run dev |
| Backend | Pruebas | npm test |
| Backend | Migraciones | npm run db:migrate |

## Trampas conocidas
- `npm test` del backend ejecuta `pretest` → `reset:migrate`: revisar el entorno y la base de pruebas antes de usarlo.
- `npm start` del backend puede ejecutar migraciones mediante `prestart` fuera de Vercel.
- Ambos repositorios tienen cambios previos sin commit. No atribuirlos a la inicialización de memoria.
- La nota de septiembre menciona remotos antiguos; consultar GIT.md y Git actual.
- No hay script de pruebas del frontend en package.json.

## Por confirmar
Estado de despliegue, servicios conectados, pruebas actuales y prioridades de desarrollo. No se ejecutó la aplicación durante esta inicialización.

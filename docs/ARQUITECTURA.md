# Arquitectura

_Estado: parcial, basada en inspección local · Última revisión: 2026-10-16_

## Componentes (rutas desde ectyre.com/)
| Componente | Responsabilidad | Evidencia |
|---|---|---|
| Interfaz React | Tienda, panel administrativo y navegación | frontend/ectyrepage/src/pages/, src/components/, src/router/ |
| Estado y HTTP | Estado de interfaz y llamadas API | frontend/ectyrepage/src/store/, src/services/, src/lib/api.js |
| API Express | Rutas, controladores y lógica de negocio | backend/apiectyre/src/routes/index.js, src/controllers/, src/services/ |
| Persistencia | Modelos y migraciones Sequelize/PostgreSQL | backend/apiectyre/src/models/, src/migrations/, package.json |
| Autenticación y medios | JWT, Google OAuth y Cloudinary | Dependencias del backend y rutas auth/media/imagen |

## Flujos comprobados por lectura
1. Axios usa VITE_API_URL o http://localhost:8080/api/v1; agrega Bearer desde localStorage.
2. Una respuesta 401 borra el token, emite auth:logout y redirige a /login.
3. El router del backend conecta productos, carrito, pedidos, clientes, vehículos, catálogos, compatibilidad y promociones; separa rutas administrativas.
4. /llantas figura como alias de lectura de /productos en el router.

## Límites de esta documentación
No se han validado solicitudes reales, conexiones, esquema desplegado ni comportamiento completo de servicios. Las descripciones de AGENTS.md pueden envejecer; confirmar contra código antes de cambiarlo.

## Restricciones
Conservar los repositorios independientes. Consultar servicios reales antes de inventar endpoints. No guardar credenciales ni datos de clientes en esta memoria. No hay decisiones técnicas nuevas aprobadas en esta inicialización.

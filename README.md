# Display Central

App interna de Display: CRM comercial, clientes, producción, cotizador, gastos de salidas y proveedores.

- **Página:** se publica con GitHub Pages desde este repositorio.
- **Login y datos:** Firebase (Authentication con correo y contraseña + Firestore).
- **Acceso:** solo los correos listados en `firestore.rules`. Quien abra la página sin cuenta solo ve la pantalla de inicio de sesión.
- **Los datos de clientes no están en este repositorio**: viven en Firestore.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La app completa |
| `firebase-config.js` | Configuración web del proyecto de Firebase (no es secreta) |
| `firestore.rules` | Reglas de seguridad: quién puede leer y escribir |

## Agregar un módulo nuevo

En `index.html`, sumar una entrada en el arreglo `MODULES` (id, nombre, ícono y función `render`) y, si guarda datos, el nombre de su colección en `COLS` y en `firestore.rules`.

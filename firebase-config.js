// Configuración web de Firebase (Consola de Firebase > Configuración del proyecto > Tus apps > Web).
// Estos valores NO son secretos: identifican el proyecto. La protección real es la clave
// del equipo y las reglas de seguridad (archivo firestore.rules).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCKjRxoLEgBk4PATMU6ZDGAMtMe2UxzLbc",
  authDomain: "display-central-d2686.firebaseapp.com",
  projectId: "display-central-d2686",
  storageBucket: "display-central-d2686.firebasestorage.app",
  messagingSenderId: "1052881866357",
  appId: "1:1052881866357:web:2bb2f5086bc4ea4fe7f23c"
};

// Cuenta única del equipo: la app solo pide la clave, no el correo.
// Debe ser el mismo correo del usuario creado en Firebase > Authentication.
window.DISPLAY_CORREO_EQUIPO = "equipo@display-central-d2686.firebaseapp.com";

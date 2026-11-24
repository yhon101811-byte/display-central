// Configuración web de Firebase (Consola de Firebase > Configuración del proyecto > Tus apps > Web).
// Estos valores NO son secretos: identifican el proyecto. La protección real es la clave
// del equipo y las reglas de seguridad (archivo firestore.rules).
window.FIREBASE_CONFIG = {
  apiKey: "PEGAR_AQUI",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Cuenta única del equipo: la app solo pide la clave, no el correo.
// Debe ser el mismo correo del usuario creado en Firebase > Authentication.
window.DISPLAY_CORREO_EQUIPO = "";
